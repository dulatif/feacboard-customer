import BaseButton from '@/shared/components/base-button/BaseButton'
import { BaseCard } from '@/shared/components/base-card/BaseCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

export const ProductsSold = () => {
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
        <div>
          <Row gutter={20}>
            {[1, 2, 3, 4].map((e, i) => (
              <Col span={6} key={i}>
                <BaseCard
                  image="/dummy/product01.png"
                  title={'플럼 세럼'}
                  subtitle={
                    <BaseFlex gap="spacing-8px" align="center">
                      <Image src={'/icons/badge/star.svg'} width={20} height={20} alt="" />
                      <BaseTypography as="p" color="neutral-500" size="body1">
                        4.8 (129 리뷰)
                      </BaseTypography>
                    </BaseFlex>
                  }
                  footer={
                    <BaseTypography as="p" color="neutral-900" size="header6" weight="bold">
                      43,000 원
                    </BaseTypography>
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </BaseSection>
    </div>
  )
}
