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
import { useRouter } from 'next/navigation'
import { CaretLeft, InstagramLogo, LinkSimpleHorizontal, MagnifyingGlass } from 'phosphor-react'
import React, { useCallback, useMemo, useState } from 'react'
import styles from './DesignerDetailView.module.scss'
import { Services } from '../../components/services/Services'
import { PersonalHistory } from '../../components/personal-history/PersonalHistory'
import { Portfolio } from '../../components/portfolio/Portfolio'
import { BeforeAfter } from '../../components/before-after/BeforeAfter'

export const DesignerDetailView = () => {
  const router = useRouter()
  const [breadcrumbItems, setBreadcrumbItems] = React.useState([
    {
      title: '홈',
    },
    {
      title: '헤어',
    },
    {
      title: '강남 살롱',
    },
    {
      title: '디자이너 한별',
    },
  ])

  const [activeTab, setActiveTab] = useState('1')
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '디자이너 서비스',
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
  const renderTabContent = (activeTab: string) => {
    if (activeTab === '1') {
      return <Services />
    }
    if (activeTab === '2') {
      return <Portfolio />
    }
    if (activeTab === '3') {
      return <BeforeAfter />
    }
    if (activeTab === '4') {
      return <PersonalHistory />
    }
    return null
  }

  return (
    <BaseFlex vertical gap="spacing-24px" padding={{ y: 'spacing-24px' }}>
      <BaseBreadcrumb items={breadcrumbItems} />
      <div>
        <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<CaretLeft />}>
          뒤로가기
        </BaseButton>
      </div>
      <BaseFlex vertical gap="spacing-48px">
        <BaseBox borderColor="neutral-300" radius="radius-16px">
          <BaseFlex justify="space-between" padding={{ x: 'spacing-24px', y: 'spacing-24px' }} align="center">
            <BaseFlex gap="spacing-48px" align="center">
              <div>
                <Avatar src={'/dummy/face03.png'} style={{ background: '#CFC3A7' }} size={168} />
              </div>
              <BaseFlex gap="spacing-16px" vertical>
                <BaseFlex gap="spacing-16px" vertical>
                  <BaseTypography as="h1" size="subtitle1" weight="semibold" color="neutral-900">
                    한별 팀장 (글래드 강남점)
                  </BaseTypography>
                  <BaseFlex gap="spacing-8px">
                    <div>
                      <BuildingsIcon width={24} height={24} color="#344054" />
                    </div>
                    <BaseTypography as="p" size="body1" weight="regular" color="neutral-700">
                      글래드 헤어 살롱 강남점
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>
                <BaseTypography as="p" size="body1" weight="regular" color="neutral-500" lineClamp={2}>
                  안녕하세요J 글래드 헤어 강남점에서 근무하고 있는 한별 팀장 이라고 합니다!
                </BaseTypography>
                <BaseFlex gap="spacing-8px">
                  <BaseButton href="#" target="_blank" icon={<LinkSimpleHorizontal size={20} />} color="secondary">
                    Litt.ly/hanbyeol
                  </BaseButton>
                  <BaseButton href="#" target="_blank" icon={<InstagramLogo size={20} />} color="secondary">
                    @hyanbyeol
                  </BaseButton>
                </BaseFlex>
              </BaseFlex>
            </BaseFlex>
            <BaseFlex vertical gap="spacing-8px" align="center">
              <BaseFlex align="center" gap="spacing-8px">
                <StarIcon width={32} height={32} />
                <BaseTypography as="h5" size="header5" weight="bold">
                  4.8
                  <BaseTypography as="span" size="body1" color="neutral-500" weight="bold">
                    /5.0
                  </BaseTypography>
                </BaseTypography>
              </BaseFlex>
              <BaseTypography as="p" size="body1" color="neutral-900" weight="regular">
                40 명의 고객이 평가함
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
        </BaseBox>
        <div className={styles['tab-navigation']}>
          <BaseTabs defaultActiveKey="1" onChange={(key) => setActiveTab(key)} gapContent="0px" items={tabItems} />
          <BaseInput prefix={<MagnifyingGlass width={20} height={20} />} placeholder="뭔가를 찾아보다" size="large" />
        </div>
        {renderTabContent(activeTab)}
      </BaseFlex>
    </BaseFlex>
  )
}
