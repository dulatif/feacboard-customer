import { BaseCircleWave } from '@/shared/components/base-circle-wave/BaseCircleWave'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import React, { useMemo } from 'react'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { DesignerCertificatesTab } from './tabs/DesignerCertificatesTab'
import { DesignerAwardsTab } from './tabs/DesignerAwardsTab'
import { useGetDesignerCareersQuery } from '@/shared/hooks/career/useCareerQuery'
import { Spin } from 'antd'

export interface PersonalHistoryProps {
  designerId: number
  data: {
    career: {
      title: string
      in?: string
      out?: string
      description?: string
    }[]
    certificates?: string[]
    awards: string[]
  }
}
export const PersonalHistory: React.FC<PersonalHistoryProps> = ({ data, designerId }) => {
  const { largeScreen } = useResponsive()
  const tabItems: BaseTabsProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: '디자이너 인증',
        children: <DesignerCertificatesTab designerId={designerId} />,
      },
      {
        key: '2',
        label: '디자이너상',
        children: <DesignerAwardsTab awards={data.awards} />,
      },
    ]
  }, [designerId, data.awards])

  const { data: careers, isLoading } = useGetDesignerCareersQuery({ designerId })

  const formattedCareers = useMemo(() => {
    return careers || []
  }, [careers])

  return (
    <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
      {/* Content Top */}
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          경력 및 수상
        </BaseTypography>
        <BaseFlex vertical gap={largeScreen ? 'spacing-40px' : 'spacing-20px'}>
          {isLoading ? (
            <BaseFlex justify="center">
              <Spin />
            </BaseFlex>
          ) : (
            formattedCareers.map((e, i) => (
              <BaseFlex key={i} vertical gap="spacing-16px">
                <BaseFlex gap="spacing-16px" align="center">
                  <div>
                    <BaseCircleWave>
                      <BuildingsIcon width={24} height={24} color="#49C3D0" />
                    </BaseCircleWave>
                  </div>
                  <BaseFlex vertical gap="spacing-8px">
                    <BaseTypography
                      as="h6"
                      size="subtitle1"
                      weight="semibold"
                      color={i === 0 ? 'primary-600' : undefined}
                    >
                      {e.company}
                    </BaseTypography>
                    {(e.start_at || e.end_at) && (
                      <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-500">
                        {e.start_at} {e.end_at ? `- ${e.end_at}` : null}
                      </BaseTypography>
                    )}
                  </BaseFlex>
                </BaseFlex>
                <BaseTypography as="p" size="subtitle2" weight="regular" color="neutral-500">
                  {e.description}
                </BaseTypography>
              </BaseFlex>
            ))
          )}
        </BaseFlex>
      </BaseFlex>

      {/* Content Bottom */}
      <BaseTabs defaultActiveKey="1" gapContent="48px" items={tabItems} />
    </BaseFlex>
  )
}
