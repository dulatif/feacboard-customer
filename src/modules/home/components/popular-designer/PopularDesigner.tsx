import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseCard } from '@/shared/components/base-card/BaseCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import StarIcon from '@/shared/components/icons/StarIcon'
import { useGetPopularDesignerQuery } from '@/shared/hooks/designer/useDesignerQuery'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { Col, Row } from 'antd'
import Image from 'next/image'
import styles from './PopularDesigner.module.scss'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'

export const PopularDesigner = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-24px' : 'spacing-12px'

  const { data: popularDesignerData, isLoading: isGetPopularDesignerLoading } = useGetPopularDesignerQuery({
    before_after_only: undefined,
  })

  return (
    <div className={styles['popular-designer']}>
      <BaseSection
        header={{
          title: '인기 디자이너',
          illust: <Image src={'/icons/popular-designer.svg'} width={40} height={40} alt="Diagnostic history" />,
        }}
        headerExtra={
          <BaseFlex gap="spacing-16px">
            <BaseButton color="primary">헤어</BaseButton>
            <BaseButton color="secondary-neutral">메이크업</BaseButton>
            <BaseButton color="secondary-neutral">네일</BaseButton>
          </BaseFlex>
        }
        className={styles['popular-designer__wrapper']}
        padding={{ x: boxPadding, y: boxPadding }}
        radius="radius-8px"
      >
        <BaseSpin spinning={isGetPopularDesignerLoading}>
          <Row gutter={largeScreen ? 20 : 12}>
            {(popularDesignerData?.data || []).map((designer, i) => (
              <Col span={largeScreen ? 6 : isTablet ? 8 : 12} key={i}>
                <BaseCard
                  image={designer.user.profile_image_url || ''}
                  title={designer.name}
                  subtitle={designer.employment.shop.name}
                  footer={
                    designer.rating ? (
                      <BaseBadge variant={'warning-25'} icon={<StarIcon width={20} height={20} />}>
                        {Number(designer.rating)}
                      </BaseBadge>
                    ) : (
                      <BaseBadge variant={'warning-25'}>평가 없음</BaseBadge>
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
