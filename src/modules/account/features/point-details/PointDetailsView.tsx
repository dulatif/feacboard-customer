'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Col, Row, Space } from 'antd'
import { Coin1 } from 'iconsax-reactjs'
import Image from 'next/image'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import TabOverview from './features/TabOverview'
import TabUsage from './features/TabUsage'
import styles from './PointDetails.module.scss'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const PointDetailsView = () => {
  const breadcrumbItems = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '정보',
    },
  ]
  return (
    <div>
      <BannerProfile breadcrumbItems={breadcrumbItems} />
      <Content />
    </div>
  )
}

const Content = withMenu(() => {
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '개요',
      children: <TabOverview />,
    },
    {
      key: '2',
      label: '사용 포인트 내역',
      children: <TabUsage />,
    },
  ]
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : 'spacing-24px'
  return (
    <>
      <BaseBox padding={{ x: boxPadding, y: boxPadding }}>
        <Row style={{ marginBottom: '48px' }}>
          <Col span={12} className={styles['col']} style={{ borderRight: '2px solid #F2F4F7' }}>
            <Row align={'middle'}>
              <Col span={12}>
                <Image src="/icons/stamp.svg" alt="stamp" width={72} height={72} />
              </Col>
              <Col span={12}>
                <Space direction="vertical" align="center">
                  <BaseTypography as="p" size="body2" weight="semibold" variant="aleo" style={{ marginBottom: '4px' }}>
                    우표 수집
                  </BaseTypography>
                  <BaseTypography as="p" size="header4" weight="semibold" variant="aleo">
                    3
                  </BaseTypography>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col span={12} className={styles['col']}>
            <Row align={'middle'}>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Coin1 size={48} variant="Bulk" style={{ color: '#7CA808' }} />
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Space direction="vertical" align="center">
                  <BaseTypography as="p" size="body2" weight="semibold" variant="aleo" style={{ marginBottom: '4px' }}>
                    총 포인트
                  </BaseTypography>
                  <BaseTypography as="p" size="header4" weight="semibold" variant="aleo">
                    2.200
                  </BaseTypography>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>

        <BaseTabs defaultActiveKey="1" items={tabItems} />
      </BaseBox>
    </>
  )
}, MenuKey.PointDetails)
