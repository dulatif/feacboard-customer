import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
import styles from './DesignerTab.module.scss'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import ChatIcon from '@/shared/components/icons/ChatIcon'
import { Avatar } from 'antd'
import StarIcon from '@/shared/components/icons/StarIcon'

export const DesignerTab = () => {
  const data = [1, 2, 3, 4, 5]
  return (
    <BaseFlex vertical gap="spacing-40px">
      {data.map((e, i) => (
        <React.Fragment key={i}>
          <div className={styles['shop__designer__item']}>
            <BaseFlex vertical gap="spacing-24px">
              <BaseContainer variant={1440}>
                <BaseFlex vertical gap="spacing-24px">
                  <div>
                    <BaseFlex justify="space-between">
                      <div>
                        <BaseFlex gap="spacing-16px">
                          <div>
                            <Avatar size={56} src="/dummy/face01.png" />
                          </div>
                          <BaseFlex vertical gap="spacing-8px">
                            <BaseTypography as="h6" size="header6" weight="semibold" color="secondary-600">
                              제이 디자이너
                            </BaseTypography>
                            <BaseFlex gap="spacing-8px" align="center">
                              <StarIcon />
                              <BaseTypography as="p" size="body1" color="neutral-500">
                                4.8 (129 리뷰)
                              </BaseTypography>
                            </BaseFlex>
                            <BaseFlex gap="spacing-8px">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <BaseButton key={i} size="sm" color="secondary">
                                  댄디컷
                                </BaseButton>
                              ))}
                            </BaseFlex>
                          </BaseFlex>
                        </BaseFlex>
                      </div>
                      <div>
                        <BaseButton color="tertiary" size="xl" icon={<ChatIcon />} outlined>
                          문의하기
                        </BaseButton>
                      </div>
                    </BaseFlex>
                  </div>
                  <div>
                    <BaseTypography as="p" size="subtitle2" color="neutral-500">
                      고객님의 스타일 과학적으로 진단하여 최선을 다해 디자인해드립니다.
                    </BaseTypography>
                  </div>
                </BaseFlex>
              </BaseContainer>
              <BaseContainer variant={1440}>
                <div className={styles['item__card__wrapper']}>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 200,
                        height: 200,
                        background: '#D9D9D9',
                        borderRadius: 16,
                        flex: '0 0 auto',
                      }}
                    />
                  ))}
                </div>
              </BaseContainer>
            </BaseFlex>
          </div>
          {i !== data.length - 1 && <BaseDivider />}
        </React.Fragment>
      ))}
    </BaseFlex>
  )
}
