'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import StarIcon from '@/shared/components/icons/StarIcon'
import { Avatar } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { CaretLeft, InstagramLogo, LinkSimpleHorizontal } from 'phosphor-react'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './DesignerDetailView.module.scss'
import { Services } from '../../components/services/Services'
import { PersonalHistory } from '../../components/personal-history/PersonalHistory'
import { Portfolio } from '../../components/portfolio/Portfolio'
import { BeforeAfter } from '../../components/before-after/BeforeAfter'
import { hair } from '@/shared/dummy/data'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useGetDetailDesignerQuery } from '@/shared/hooks/designer/useDesignerQuery'
import Render from '@/shared/components/base-render/Render'

export const DesignerDetailView = () => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const router = useRouter()
  const { id } = useParams()
  const designerId = id as string

  // Fetch designer detail from API
  const { data: designerDetail, isLoading: isLoadingDesigner } = useGetDetailDesignerQuery({
    params: { id: designerId },
    enabled: !!designerId,
  })

  // Fallback to dummy data for now
  const data = hair.designer.find((e) => e.id === id)
  const [breadcrumbItems, setBreadcrumbItems] = useState<{ title: string }[]>([])

  useEffect(() => {
    if (designerDetail) {
      setBreadcrumbItems([
        {
          title: '홈',
        },
        {
          title: designerDetail.name,
        },
      ])
    } else if (data) {
      setBreadcrumbItems([
        {
          title: '홈',
        },
        {
          title: hair.type,
        },
        {
          title: data?.company,
        },
        {
          title: data?.name,
        },
      ])
    }
  }, [id, data, designerDetail])

  const [activeTab, setActiveTab] = useState('1')
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '시술 가능 상품',
      children: null,
    },
    {
      key: '2',
      label: '포트폴리오',
      children: null,
    },
    {
      key: '3',
      label: '비포 & 애프터',
      children: null,
    },
    {
      key: '4',
      label: '경력',
      children: null,
    },
  ]

  if (!designerDetail && !data) return null
  return (
    <BaseFlex vertical gap="spacing-24px" padding={{ y: 'spacing-24px' }}>
      <BaseBreadcrumb items={breadcrumbItems} />
      <div>
        <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<CaretLeft />}>
          뒤로가기
        </BaseButton>
      </div>
      <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
        <BaseBox borderColor="neutral-300" radius="radius-16px">
          <BaseFlex
            justify="space-between"
            gap="spacing-24px"
            vertical={isMobile}
            padding={{
              x: largeScreen ? 'spacing-24px' : 'spacing-12px',
              y: largeScreen ? 'spacing-24px' : 'spacing-12px',
            }}
            align="center"
          >
            <BaseFlex
              vertical={isMobile}
              gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}
              align={isMobile ? 'center' : 'flex-start'}
            >
              <div>
                <Avatar
                  src={designerDetail?.user?.profile_image_url || designerDetail?.profile_image_url}
                  style={{ background: '#dededee0' }}
                  size={largeScreen ? 168 : 120}
                >
                  <Render in={!designerDetail?.user?.profile_image_url && !designerDetail?.profile_image_url}>
                    <BaseTypography as="p" size="header2" color="white">
                      {designerDetail?.name?.slice(0, 1).toUpperCase()}
                    </BaseTypography>
                  </Render>
                </Avatar>
              </div>
              <BaseFlex gap="spacing-16px" vertical>
                <BaseFlex gap="spacing-16px" vertical>
                  <BaseTypography as="h1" size="subtitle1" weight="semibold" color="neutral-900">
                    {designerDetail?.name || data?.name}
                  </BaseTypography>
                  {designerDetail?.employment?.shop?.name && (
                    <BaseFlex gap="spacing-8px">
                      <div>
                        <BuildingsIcon width={24} height={24} color="#344054" />
                      </div>
                      <BaseTypography as="p" size="body1" weight="regular" color="neutral-700">
                        {designerDetail.employment?.shop?.name}
                      </BaseTypography>
                    </BaseFlex>
                  )}
                </BaseFlex>
                <BaseTypography as="p" size="body1" weight="regular" color="neutral-500">
                  {designerDetail?.bio || data?.bio || '-'}
                </BaseTypography>
                <BaseFlex gap="spacing-8px">
                  {(() => {
                    const socials = designerDetail?.socials || []
                    const tiktok = socials.find((s) => s.social_name === 'tiktok')
                    const instagram = socials.find((s) => s.social_name === 'instagram')

                    return (
                      <>
                        {tiktok && (
                          <BaseButton
                            href={tiktok.social_url}
                            target="_blank"
                            icon={<LinkSimpleHorizontal size={20} />}
                            color="secondary"
                          >
                            {tiktok.social_displayname}
                          </BaseButton>
                        )}
                        {instagram && (
                          <BaseButton
                            href={instagram.social_url}
                            target="_blank"
                            icon={<InstagramLogo size={20} />}
                            color="secondary"
                          >
                            {instagram.social_displayname}
                          </BaseButton>
                        )}
                      </>
                    )
                  })()}
                </BaseFlex>
              </BaseFlex>
            </BaseFlex>
            {(designerDetail?.rating || data?.rating) && (
              <BaseFlex vertical gap="spacing-8px" align="center">
                <BaseFlex align="center" gap="spacing-8px">
                  <StarIcon width={32} height={32} />
                  <BaseTypography as="h5" size="header5" weight="bold">
                    {designerDetail?.rating ? Number(designerDetail.rating).toFixed(1) : data?.rating}
                    <BaseTypography as="span" size="body1" color="neutral-500" weight="bold">
                      /5.0
                    </BaseTypography>
                  </BaseTypography>
                </BaseFlex>
                <BaseTypography as="p" size="body1" color="neutral-900" weight="regular">
                  40개의 리뷰
                </BaseTypography>
              </BaseFlex>
            )}
          </BaseFlex>
        </BaseBox>
        <div className={styles['tab-navigation']}>
          <BaseTabs defaultActiveKey="1" onChange={(key) => setActiveTab(key)} gapContent="0px" items={tabItems} />
        </div>
        {activeTab === '1' ? (
          <Services designerId={designerId} shopId={designerDetail?.employment?.shop?.id} />
        ) : activeTab === '2' ? (
          <Portfolio />
        ) : activeTab === '3' ? (
          <BeforeAfter />
        ) : activeTab === '4' ? (
          <PersonalHistory
            designerId={Number(designerId)}
            data={{
              career: data?.career || [],
              awards: data?.awards || [],
              certificates: data?.certificates || [],
            }}
          />
        ) : null}
      </BaseFlex>
    </BaseFlex>
  )
}
