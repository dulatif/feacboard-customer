import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
import styles from './CompanyTab.module.scss'
import Image from 'next/image'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import StarIcon from '@/shared/components/icons/StarIcon'
import ClockIcon from '@/shared/components/icons/ClockIcon'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import PaperPlaneIcon from '@/shared/components/icons/PaperPlaneIcon'

export const CompanyTab = () => {
  const data = [1, 2, 3, 4, 5]
  return (
    <BaseFlex vertical gap="spacing-40px">
      {data.map((e, i) => (
        <React.Fragment key={i}>
          <BaseContainer variant={1440}>
            <div className={styles['item__card__wrapper']}>
              <BaseFlex gap="spacing-24px">
                <div className={styles['item__card__item']}>
                  <BaseFlex vertical gap="spacing-16px">
                    <div className={styles['item__card__image__wrapper']}>
                      <Image src={'/dummy/store02.jpg'} fill alt="" className={styles['item__card__image']} />
                    </div>
                    <BaseTypography as="h6" size="header6" weight="semibold" color="secondary-600">
                      글래드 헤어 살롱 강남점
                    </BaseTypography>
                    <BaseFlex vertical gap="spacing-8px">
                      <BaseFlex gap="spacing-8px" align="center">
                        <StarIcon width={20} height={20} />
                        <BaseTypography as="p" size="body1" color="neutral-500">
                          4.8 (129 리뷰)
                        </BaseTypography>
                      </BaseFlex>
                      <BaseFlex gap="spacing-8px" align="center">
                        <ClockIcon width={20} height={20} />
                        <BaseTypography as="p" size="body1" color="neutral-500">
                          10:30 – 22: 30
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                  </BaseFlex>
                </div>
                <div className={styles['item__card__item']}>
                  <BaseFlex vertical gap="spacing-16px" align="center">
                    <div className={styles['item__card__image__wrapper']}>
                      <Image src={'/dummy/store03.jpg'} fill alt="" className={styles['item__card__image']} />
                    </div>
                    <BaseButton size="xl" color="tertiary" icon={<PaperPlaneIcon />} iconPosition="end" outlined>
                      역삼역 3번 출구에서 도보 300m 입니다.
                    </BaseButton>
                  </BaseFlex>
                </div>
              </BaseFlex>
            </div>
          </BaseContainer>
          {i !== data.length - 1 && <BaseDivider />}
        </React.Fragment>
      ))}
    </BaseFlex>
  )
}
