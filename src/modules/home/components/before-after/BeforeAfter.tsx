'use client'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import { hair, nail } from '@/shared/dummy/data'
import { ArrowRight2 } from 'iconsax-reactjs'
import Image from 'next/image'
import styles from './BeforeAfter.module.scss'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Col, Row } from 'antd'
import { BaseImageCarousel } from '@/shared/components/base-image-carousel/BaseImageCarousel'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { useState } from 'react'
import Link from 'next/link'

export const BeforeAfter = () => {
  const [beforePosition, setBeforePosition] = useState(0)
  const [afterPosition, setAfterPosition] = useState(0)
  return (
    <div className={styles['container']}>
      <BaseSection
        header={{
          title: '비포&애프터',
          action: (
            <BaseButton
              variant="link"
              color="tertiary"
              icon={<ArrowRight2 width={20} height={20} />}
              iconPosition="end"
            >
              더 보기
            </BaseButton>
          ),
          illust: <Image src={'/icons/fire.svg'} width={40} height={40} alt="" />,
        }}
      >
        <BaseFlex gap="spacing-20px" flex={1} className={styles['content']}>
          {[nail.designer[0], nail.designer[1]].map((e, i) => (
            <BaseBox
              key={i}
              borderColor="neutral-300"
              radius="radius-16px"
              padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
            >
              <BaseFlex vertical gap="spacing-24px">
                <Link href={`/designer/${e.id}`}>
                  <BaseFlex gap="spacing-16px" align="center">
                    <div>
                      <Avatar src={e.picture} style={{ background: '#CFC3A7' }} size={48} />
                    </div>
                    <BaseTypography as="p" size="body1" weight="medium" color="neutral-900">
                      {e.name}
                    </BaseTypography>
                  </BaseFlex>
                </Link>
                <Row gutter={[24, 24]}>
                  <Col key={`before-${i}`} span={12}>
                    <div className={styles['before']}>
                      <BaseImageCarousel
                        imageStyle={{ height: 270 }}
                        images={e.beforeAfter[0].before}
                        onChange={(current) => setBeforePosition(current)}
                        btnOffset={16}
                      />
                      <div className={styles['badge']}>
                        <BaseBadge variant="danger-100">Before</BaseBadge>
                      </div>
                    </div>
                  </Col>
                  <Col key={`after-${i}`} span={12}>
                    <div className={styles['before']}>
                      <BaseImageCarousel
                        imageStyle={{ height: 270 }}
                        images={e.beforeAfter[0].after}
                        onChange={(current) => setAfterPosition(current)}
                        btnOffset={16}
                      />
                      <div className={styles['badge']}>
                        <BaseBadge variant="success-100">After</BaseBadge>
                      </div>
                    </div>
                  </Col>
                </Row>
              </BaseFlex>
            </BaseBox>
          ))}
        </BaseFlex>
      </BaseSection>
    </div>
  )
}
