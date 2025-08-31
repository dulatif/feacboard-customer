import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseCard } from '@/shared/components/base-card/BaseCard'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import { Col, Row } from 'antd'
import Image from 'next/image'
import styles from './DiagnosticHistory.module.scss'

export const DiagnosticHistory = () => {
  return (
    <div className={styles['diagnostic-history']}>
      <BaseSection
        header={{
          title: '최근 진단 히스토리',
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
          illust: <Image src={'/icons/diagnostic-history.svg'} width={40} height={40} alt="Diagnostic history" />,
        }}
      >
        <div>
          <Row gutter={20}>
            {[1, 2, 3, 4].map((e, i) => (
              <Col span={6} key={i}>
                <BaseCard
                  image="/dummy/face01.png"
                  title={'4계절 컬러 + 톤'}
                  subtitle={
                    <BaseBadge
                      variant={'primary-25'}
                      icon={<Image src={'/icons/badge/ai.svg'} width={27} height={27} alt="" />}
                    >
                      AI 진단
                    </BaseBadge>
                  }
                  footer={
                    <BaseTypography as="p" color="neutral-500" size="body1">
                      2024.10.08
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
