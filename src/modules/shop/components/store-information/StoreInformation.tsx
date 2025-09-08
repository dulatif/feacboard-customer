import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import React from 'react'
import styles from './StoreInformation.module.scss'
import OpenLinkIcon from '@/shared/components/icons/OpenLinkIcon'

export const StoreInformation = () => {
  return (
    <BaseFlex vertical gap="spacing-48px" className={styles['store-information']}>
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold">
          글래드 헤어 살롱 강남점
        </BaseTypography>
        <BaseFlex vertical gap="spacing-8px">
          <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
            고급스러운 강남 지역에 위치한 저희 강남 지점은 세련된 인테리어와 편안한 분위기 속에서 최고의 뷰티 서비스를
            제공합니다. 고객 한 분 한 분에게 맞춤형 케어를 선사하며, 아름다움과 휴식을 동시에 경험할 수 있는 특별한
            공간입니다.
          </BaseTypography>
          <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
            ✨ 제공 서비스 안내:
          </BaseTypography>
          <ul>
            <li>
              <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
                헤어 스타일링 & 커트
                <br />
                전문 스타일리스트가 얼굴형과 트렌드를 고려하여 고객님만의 스타일을 완성해 드립니다. 클래식부터 모던까지
                다양한 스타일을 연출해드립니다.
              </BaseTypography>
            </li>
            <li>
              <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
                펌 & 컬 디자인
                <br />
                자연스러운 웨이브부터 세련된 컬 디자인까지, 오랜 유지력을 자랑하는 고품질 펌 서비스를 제공합니다.
              </BaseTypography>
            </li>
            <li>
              <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
                염색 & 컬러 테라피
                <br />
                퍼스널 컬러 진단을 통해 고객님 피부 톤에 가장 잘 어울리는 컬러를 제안해드리며, 윤기 있고 건강한 머릿결을
                지켜드립니다.
              </BaseTypography>
            </li>
            <li>
              <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
                헤어 케어 프로그램
                <br />
                손상 모발 복구, 두피 케어 등 전문적인 관리 프로그램으로 머릿결과 두피 건강을 동시에 챙겨드립니다.
              </BaseTypography>
            </li>
            <li>
              <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
                메이크업 & 스타일링 서비스
                <br />
                특별한 날을 위한 프로페셔널 메이크업과 스타일링 서비스로 최고의 순간을 완성해드립니다.
              </BaseTypography>
            </li>
          </ul>
        </BaseFlex>
      </BaseFlex>
      <BaseDivider />

      <BaseFlex gap="spacing-120px" align="center" justify="center">
        <BaseFlex vertical gap="spacing-8px" align="center">
          <Image src={`/images/store/booked.svg`} width={56} height={56} alt="" />
          <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
            예약
          </BaseTypography>
        </BaseFlex>
        <BaseFlex vertical gap="spacing-8px" align="center">
          <Image src={`/images/store/wifi.svg`} width={56} height={56} alt="" />
          <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
            와이파이
          </BaseTypography>
        </BaseFlex>
        <BaseFlex vertical gap="spacing-8px" align="center">
          <Image src={`/images/store/bff.svg`} width={56} height={56} alt="" />
          <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
            단체 예약
          </BaseTypography>
        </BaseFlex>
        <BaseFlex vertical gap="spacing-8px" align="center">
          <Image src={`/images/store/parking.svg`} width={56} height={56} alt="" />
          <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
            주차가능
          </BaseTypography>
        </BaseFlex>
      </BaseFlex>
      <BaseDivider />

      <BaseFlex vertical gap="spacing-40px" className={styles['store-information__achievement']}>
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          성취
        </BaseTypography>
        <BaseFlex vertical gap="spacing-40px">
          <BaseFlex gap="spacing-24px">
            <BaseFlex
              gap="spacing-24px"
              padding={{ y: 'spacing-20px' }}
              justify="center"
              align="center"
              flex={1}
              className={styles['store-information__achievement__item']}
            >
              <Image src={`/images/store/trophy.svg`} width={74} height={74} alt="" />
              <BaseTypography as="h4" size="header4" weight="bold" color="white">
                최고의 디자이너
              </BaseTypography>
            </BaseFlex>
            <BaseFlex
              gap="spacing-24px"
              padding={{ y: 'spacing-20px' }}
              justify="center"
              align="center"
              flex={1}
              className={styles['store-information__achievement__item']}
            >
              <Image src={`/images/store/trophy.svg`} width={74} height={74} alt="" />
              <BaseTypography as="h4" size="header4" weight="bold" color="white">
                최고의 디자이너
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
          <BaseFlex gap="spacing-24px">
            <BaseFlex
              gap="spacing-24px"
              padding={{ y: 'spacing-20px' }}
              justify="center"
              align="center"
              flex={1}
              className={styles['store-information__achievement__item']}
            >
              <Image src={`/images/store/trophy.svg`} width={74} height={74} alt="" />
              <BaseTypography as="h4" size="header4" weight="bold" color="white">
                최고의 디자이너
              </BaseTypography>
            </BaseFlex>
            <BaseFlex
              gap="spacing-24px"
              padding={{ y: 'spacing-20px' }}
              justify="center"
              align="center"
              flex={1}
              className={styles['store-information__achievement__item']}
            >
              <Image src={`/images/store/trophy.svg`} width={74} height={74} alt="" />
              <BaseTypography as="h4" size="header4" weight="bold" color="white">
                최고의 디자이너
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
      <BaseDivider />

      <BaseFlex vertical gap="spacing-24px" className={styles['store-information__social-media']}>
        <BaseFlex vertical gap="spacing-24px">
          <BaseFlex gap="spacing-24px">
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
          <BaseFlex gap="spacing-24px">
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
