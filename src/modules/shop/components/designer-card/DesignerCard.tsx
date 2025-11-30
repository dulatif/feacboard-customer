import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import ClockIcon from '@/shared/components/icons/ClockIcon'
import DocumentIcon from '@/shared/components/icons/DocumentIcon'
import MapMarkerIcon from '@/shared/components/icons/MapMarkerIcon'
import MessagesIcon from '@/shared/components/icons/MessagesIcon'
import ProfileCircleIcon from '@/shared/components/icons/ProfileCircleIcon'
import StarIcon from '@/shared/components/icons/StarIcon'
import { Avatar } from 'antd'
import { ServiceCard, ServiceCardProps } from '../service-card/ServiceCard'
import styles from './DesignerCard.module.scss'
import { UserCircle } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import { useResponsive } from '@/shared/hooks/useResponsive'

export interface DesignerCardProps {
  id: string
  picture: string
  name: string
  rating: number
  company: string
  location: string
  availableHour: string
  availableService: number
  specialties: string[]
  services: ServiceCardProps[]
}
export const DesignerCard: React.FC<DesignerCardProps> = ({
  id,
  availableHour,
  availableService,
  company,
  location,
  name,
  picture,
  rating,
  services,
  specialties,
}) => {
  const router = useRouter()
  const handleRedirectToDesignerProfile = (id: string) => {
    router.push(`/designer/${id}`)
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-24px' : 'spacing-12px'
  return (
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} borderColor="neutral-300" radius="radius-16px">
      <BaseFlex vertical gap="spacing-32px">
        {/* Header  */}
        <BaseFlex
          vertical={!largeScreen}
          gap={!largeScreen ? 'spacing-16px' : 'spacing-8px'}
          align={isTablet ? 'start' : 'center'}
          justify="space-between"
        >
          <BaseFlex vertical={isMobile} gap="spacing-16px" align="center">
            <Avatar src={picture} size={64} style={{ background: '#CFC3A7' }} />
            <BaseFlex vertical gap="spacing-12px" align={isMobile ? 'center' : undefined}>
              <BaseFlex gap="spacing-16px">
                <BaseTypography as="h1" size="body1" weight="semibold">
                  {name}
                </BaseTypography>
                <BaseFlex gap="spacing-8px" align="center">
                  <StarIcon width={20} height={20} />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    {rating} (129 리뷰)
                  </BaseTypography>
                </BaseFlex>
              </BaseFlex>
              <BaseFlex
                wrap={'wrap'}
                justify={isMobile ? 'center' : undefined}
                gap={isMobile ? 'spacing-12px' : 'spacing-24px'}
              >
                <BaseFlex gap="spacing-8px" align="center">
                  <BuildingsIcon width={16} height={16} color="#667085" />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    {company}
                  </BaseTypography>
                </BaseFlex>
                <BaseFlex gap="spacing-8px" align="center">
                  <MapMarkerIcon width={16} height={16} color="#667085" />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    {location}
                  </BaseTypography>
                </BaseFlex>
                <BaseFlex gap="spacing-8px" align="center">
                  <ClockIcon width={16} height={16} color="#667085" />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    오늘 이용 가능 시간 : {availableHour}
                  </BaseTypography>
                </BaseFlex>
                <BaseFlex gap="spacing-8px" align="center">
                  <DocumentIcon width={16} height={16} color="#667085" />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    {availableService}개의 서비스 이용 가능
                  </BaseTypography>
                </BaseFlex>
              </BaseFlex>
            </BaseFlex>
          </BaseFlex>
          <BaseFlex
            justify={isMobile ? 'center' : undefined}
            gap={largeScreen ? 'spacing-24px' : 'spacing-16px'}
            align="center"
          >
            <BaseButton color="secondary" icon={<MessagesIcon width={20} height={20} />} />
            <BaseButton onClick={() => handleRedirectToDesignerProfile(id)} icon={<UserCircle size={20} />}>
              프로필 보기
            </BaseButton>
          </BaseFlex>
        </BaseFlex>

        {/* Body */}
        <div className={styles['service']}>
          {services.slice(0, 4).map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* Footer */}
        <BaseFlex
          gap={isMobile ? 'spacing-12px' : 'spacing-24px'}
          align={isMobile ? 'flex-start' : 'center'}
          vertical={isMobile}
        >
          <BaseTypography as="p" size="body2" color="neutral-500">
            디자이너 전문 분야 :
          </BaseTypography>
          <BaseFlex gap="spacing-8px" align="center" wrap="wrap">
            {specialties.map((speciality, i) => (
              <BaseBadge key={i} variant="neutral-100" padding={{ x: 'spacing-14px', y: 'spacing-8px' }}>
                {speciality}
              </BaseBadge>
            ))}
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
