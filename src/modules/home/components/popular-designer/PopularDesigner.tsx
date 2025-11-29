import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseCard } from '@/shared/components/base-card/BaseCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import { Col, Row } from 'antd'
import Image from 'next/image'
import styles from './PopularDesigner.module.scss'
import StarIcon from '@/shared/components/icons/StarIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const PopularDesigner = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-24px' : 'spacing-12px'
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
        <div>
          <Row gutter={largeScreen ? 20 : 12}>
            {Array.from({ length: largeScreen ? 4 : isTablet ? 3 : 2 }).map((e, i) => (
              <Col span={largeScreen ? 6 : isTablet ? 8 : 12} key={i}>
                <BaseCard
                  image="/dummy/face02.png"
                  title={'한별 팀장'}
                  subtitle={'글래드 뷰티, 강남'}
                  footer={
                    <BaseBadge variant={'warning-25'} icon={<StarIcon width={20} height={20} />}>
                      4.8 (129 리뷰)
                    </BaseBadge>
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
