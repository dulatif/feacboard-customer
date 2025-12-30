import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import React from 'react'
import styles from './StoreInformation.module.scss'
import OpenLinkIcon from '@/shared/components/icons/OpenLinkIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useShopFacilitiesQuery } from '@/shared/hooks/facility/useFacilityQuery'
import { useGetShopCertificatesQuery } from '@/shared/hooks/certificate/useCertificateQuery'
import { Spin, Empty } from 'antd'

export interface StoreInformationProps {
  data: {
    storeName: string
  }
  description: string
  shopId: number
}
export const StoreInformation: React.FC<StoreInformationProps> = ({ data, description, shopId }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const { data: facilities, isLoading: isFacilitiesLoading } = useShopFacilitiesQuery({ shopId })
  const { data: certificates, isLoading: isCertificatesLoading } = useGetShopCertificatesQuery({ shopId })
  return (
    <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-32px'} className={styles['store-information']}>
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold">
          {data.storeName}
        </BaseTypography>
        <BaseFlex vertical gap="spacing-8px">
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </BaseFlex>
      </BaseFlex>
      <BaseDivider />

      <BaseFlex
        gap={largeScreen ? 'spacing-120px' : isTablet ? 'spacing-40px' : 'spacing-32px'}
        align="center"
        justify="center"
        wrap
      >
        {isFacilitiesLoading ? (
          <Spin />
        ) : facilities && facilities.length > 0 ? (
          facilities.map((facility) => (
            <BaseFlex key={facility.id} vertical gap="spacing-8px" align="center">
              <Image
                src={facility.icon}
                width={largeScreen ? 56 : 36}
                height={largeScreen ? 56 : 36}
                alt={facility.localized_name}
              />
              <BaseTypography as="h6" size={largeScreen ? 'header6' : 'body1'} weight="semibold" color="neutral-700">
                {facility.localized_name}
              </BaseTypography>
            </BaseFlex>
          ))
        ) : (
          <BaseTypography as="p" size="body1" color="neutral-500">
            편의시설 정보가 없습니다.
          </BaseTypography>
        )}
      </BaseFlex>
      <BaseDivider />

      <BaseFlex vertical gap="spacing-40px" className={styles['store-information__achievement']}>
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          성취
        </BaseTypography>
        {isCertificatesLoading ? (
          <BaseFlex justify="center" padding={{ y: 'spacing-40px' }}>
            <Spin />
          </BaseFlex>
        ) : certificates && certificates.length > 0 ? (
          <BaseFlex vertical gap="spacing-24px">
            {/* Render certificates in rows of 2 */}
            {Array.from({ length: Math.ceil(certificates.length / 2) }, (_, rowIndex) => (
              <BaseFlex key={rowIndex} gap="spacing-24px">
                {certificates.slice(rowIndex * 2, rowIndex * 2 + 2).map((certificate) => (
                  <BaseFlex
                    key={certificate.id}
                    vertical={isMobile}
                    gap="spacing-24px"
                    padding={{ y: 'spacing-20px' }}
                    justify="center"
                    align="center"
                    flex={1}
                    className={styles['store-information__achievement__item']}
                  >
                    <Image
                      src={certificate.icon}
                      width={largeScreen ? 74 : 52}
                      height={largeScreen ? 74 : 52}
                      alt={certificate.localized_name}
                    />
                    <BaseTypography
                      as="h4"
                      size={largeScreen ? 'header4' : isTablet ? 'header6' : 'body1'}
                      weight="bold"
                      color="white"
                    >
                      {certificate.localized_name}
                    </BaseTypography>
                  </BaseFlex>
                ))}
                {/* Add empty placeholder if odd number of certificates in last row */}
                {rowIndex === Math.ceil(certificates.length / 2) - 1 && certificates.length % 2 === 1 && (
                  <BaseFlex flex={1} style={{ opacity: 0 }}>
                    -
                  </BaseFlex>
                )}
              </BaseFlex>
            ))}
          </BaseFlex>
        ) : (
          <BaseFlex justify="center" padding={{ y: 'spacing-20px' }}>
            <Empty />
            <BaseTypography as="p" size="body1" color="neutral-500">
              인증서 정보가 없습니다.
            </BaseTypography>
          </BaseFlex>
        )}
      </BaseFlex>
      <BaseDivider />

      <BaseFlex vertical gap="spacing-24px" className={styles['store-information__social-media']}>
        <BaseFlex vertical gap="spacing-24px">
          <BaseFlex vertical={isMobile} gap="spacing-24px">
            <BaseFlex
              flex={1}
              padding={{ y: 'spacing-20px', x: 'spacing-40px' }}
              align="center"
              justify="space-between"
              className={styles['store-information__social-media__item']}
            >
              <BaseFlex gap="spacing-16px" align="center">
                <Image src={'/images/instagram.svg'} width={64} height={64} alt="" />
                <BaseTypography as="h6" size="header6" weight="semibold" variant="aleo" color="primary-600">
                  @chic.beauty
                </BaseTypography>
              </BaseFlex>
              <OpenLinkIcon />
            </BaseFlex>
            <BaseFlex
              flex={1}
              padding={{ y: 'spacing-20px', x: 'spacing-40px' }}
              align="center"
              justify="space-between"
              className={styles['store-information__social-media__item']}
            >
              <BaseFlex gap="spacing-16px" align="center">
                <Image src={'/images/youtube.svg'} width={64} height={64} alt="" />
                <BaseTypography as="h6" size="header6" weight="semibold" variant="aleo" color="primary-600">
                  @chic.beauty
                </BaseTypography>
              </BaseFlex>
              <OpenLinkIcon />
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>

        <BaseFlex vertical gap="spacing-24px">
          <BaseFlex vertical={isMobile} gap="spacing-24px">
            <BaseFlex
              flex={1}
              padding={{ y: 'spacing-20px', x: 'spacing-40px' }}
              align="center"
              justify="space-between"
              className={styles['store-information__social-media__item']}
            >
              <BaseFlex gap="spacing-16px" align="center">
                <Image src={'/images/tiktok.svg'} width={64} height={64} alt="" />
                <BaseTypography as="h6" size="header6" weight="semibold" variant="aleo" color="primary-600">
                  @chic.beauty
                </BaseTypography>
              </BaseFlex>
              <OpenLinkIcon />
            </BaseFlex>

            <BaseFlex
              flex={1}
              padding={{ y: 'spacing-20px', x: 'spacing-40px' }}
              align="center"
              justify="space-between"
              className={styles['store-information__social-media__item']}
            >
              <BaseFlex gap="spacing-16px" align="center">
                <Image src={'/images/facebook.svg'} width={64} height={64} alt="" />
                <BaseTypography as="h6" size="header6" weight="semibold" variant="aleo" color="primary-600">
                  @chic.beauty
                </BaseTypography>
              </BaseFlex>
              <OpenLinkIcon />
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseFlex>
  )
}
