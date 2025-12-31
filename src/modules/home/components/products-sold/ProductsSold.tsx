import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseCard } from '@/shared/components/base-card/BaseCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import StarIcon from '@/shared/components/icons/StarIcon'
import { useGetPopularShopQuery } from '@/shared/hooks/shop/useShopQuery'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

export const ProductsSold = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()

  const { data: popularShopData, isLoading: isGetPopularShopLoading } = useGetPopularShopQuery()

  return (
    <div>
      <BaseSection
        header={{
          title: '가게에서 파는 뷰티 제품',
          action: (
            <BaseButton
              variant="link"
              color="tertiary"
              icon={<ChevronRightIcon width={20} height={20} />}
              iconPosition="end"
            >
              더 보기
            </BaseButton>
          ),
          illust: <Image src={'/icons/shop.svg'} width={40} height={40} alt="Diagnostic history" />,
        }}
      >
        <BaseSpin spinning={isGetPopularShopLoading}>
          <Row gutter={largeScreen ? 20 : 12}>
            {(popularShopData?.data || []).map((shop, i) => (
              <Col span={largeScreen ? 6 : isTablet ? 8 : 12} key={i}>
                <BaseCard
                  image={shop.thumbnails[0]?.url || ''}
                  title={shop.name}
                  subtitle={
                    <BaseTypography as="p" color="neutral-500" size="body1">
                      {shop.address}
                    </BaseTypography>
                  }
                  footer={
                    shop.rating ? (
                      <BaseFlex gap="spacing-8px" align="center">
                        <StarIcon width={20} height={20} />
                        <BaseTypography as="p" color="neutral-500" size="body1">
                          {Number(shop.rating)} ({shop.review_count} 리뷰)
                        </BaseTypography>
                      </BaseFlex>
                    ) : (
                      <BaseTypography as="p" color="neutral-500" size="body1">
                        평가 없음
                      </BaseTypography>
                    )
                  }
                />
              </Col>
            ))}
          </Row>
        </BaseSpin>
      </BaseSection>
    </div>
  )
}
