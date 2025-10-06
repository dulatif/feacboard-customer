import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBreadcrumb, BaseBreadcrumbProps } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import { Avatar } from 'antd'
import Image from 'next/image'
import styles from './BannerProfile.module.scss'
import Link from 'next/link'

export interface BannerProfileProps {
  breadcrumbItems: BaseBreadcrumbProps['items']
}
export const BannerProfile: React.FC<BannerProfileProps> = ({ breadcrumbItems }) => {
  return (
    <div className={styles['banner-profile']}>
      <BaseContainer variant={1440}>
        <BaseFlex vertical gap="spacing-32px">
          <BaseBreadcrumb items={breadcrumbItems} color="white" />
          <BaseFlex gap="spacing-32px" justify="space-between" align="center">
            <BaseFlex gap="spacing-32px" align="center">
              <Avatar src={'/dummy/face03.png'} style={{ background: '#CFC3A7' }} size={120} />
              <BaseFlex gap="spacing-8px" vertical>
                <BaseTypography as="h6" size="header6" weight="semibold" color="white">
                  텡쿠 후안샤
                </BaseTypography>
                <Link href="/my-account/edit-profile">
                  <BaseButton variant="link" icon={<ChevronRightIcon width={16} height={16} />} iconPosition="end">
                    계정 편집
                  </BaseButton>
                </Link>
              </BaseFlex>
            </BaseFlex>
            <BaseBadge
              icon={<Image src={'/icons/badge/color-result.svg'} width={24} height={24} alt="" />}
              variant={'pink-gradient'}
              padding={{ x: 'spacing-16px', y: 'spacing-8px' }}
            >
              가벼운 여름
            </BaseBadge>
          </BaseFlex>
        </BaseFlex>
      </BaseContainer>
    </div>
  )
}
