import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Space } from 'antd'
import Image from 'next/image'
import styles from './AIOnboardingView.module.scss'
import AIDIagnosisCard from './components/AIDiagnosisCard'
import CardReview from './components/CardReview'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { useResponsive } from '@/shared/hooks/useResponsive'

const AIOnboardingView = () => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const breadcrumbs = [
    {
      title: '홈',
    },
    {
      title: 'AI진단',
    },
  ]

  return (
    <BaseContainer className={styles['ai_onboarding']} variant={1440} padding={{ y: 'spacing-40px' }}>
      <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '48px' }} />

      {/* --- */}
      <div style={{ marginBottom: '48px' }}>
        <BaseFlex gap="spacing-20px">
          {Array.from({ length: largeScreen ? 3 : isTablet ? 2 : 1 }).map((_, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                borderRadius: 12,
              }}
            >
              <Image key={index} src={`/dummy/ai-onboarding-thumb-${index + 1}.jpg`} alt="AI Onboarding" fill />
            </div>
          ))}
        </BaseFlex>
      </div>
      {/* ==== */}

      <div style={{ marginBottom: '48px' }}>
        <BaseTypography as="h6" size="subtitle1" weight="semibold" style={{ marginBottom: '16px' }}>
          퍼스널 컬러 분석에 오신 것을 환영 합니다! 😊
        </BaseTypography>
        <BaseTypography as="p" size="body1" color="neutral-500">
          개인의 성격과 취향을 반영한 컬러 퍼스널리티를 통해 나만의 색을 찾아보세요. 굵고 강렬한 색상을 좋아하는
          열정적인 타입, 부드럽고 차분한 색감을 선호하는 섬세한 성격, 혹은 화려하고 눈에 띄는 컬러에 끌리는 자신감
          넘치는 스타일까지 — 나에게 딱 맞는 컬러는 생각보다 가까이에 있습니다. 컬러는 단순한 선택이 아닌, 나를 표현하는
          또 하나의 언어입니다. 지금 이곳에서 당신만의 컬러를 발견해보세요.
        </BaseTypography>
      </div>

      {/* ---  */}
      <div style={{ marginBottom: '80px' }}>
        <BaseTypography as="h6" size="subtitle1" weight="semibold" style={{ marginBottom: '16px' }}>
          지금 시도해보세요!
        </BaseTypography>
        <div className={styles['ai_onboarding__diagnosis_cards']}>
          {Array.from({ length: isMobile ? 1 : 2 }).map((_, index) => (
            <AIDIagnosisCard
              key={index}
              type="manual"
              imageUrl={`/dummy/ai-onboarding-preview-${index + 1}.jpg`}
              title="무료로 퍼스널 컬러를 진단 받아보세요"
              rating={4.5}
              reviewCount={129}
              originalPrice="5000원"
              currentPriceText="무료!"
            />
          ))}
        </div>
      </div>
      {/* ===  */}

      {/* ---  */}
      <BaseTypography as="h6" size="subtitle1" weight="semibold" style={{ marginBottom: '24px' }}>
        개인 컬러 기능을 사용해 본 사람들의 말 😊
      </BaseTypography>
      <div className={styles['ai_onboarding__review']}>
        <BaseFlex gap="spacing-24px">
          {Array.from({ length: 6 }).map((e, i) => (
            <div key={i} className={styles['ai_onboarding__review__item']}>
              <CardReview
                avatarUrl="/dummy/face03.png"
                userName="김지수"
                rating={4}
                type="manual"
                reviewText="옷 색상과 액세서리 선택에 더 자신감이 생겼어요, 옷 색상과 액세서리 선택에 더 자신감이 생겼어요"
              />
            </div>
          ))}
        </BaseFlex>
      </div>
      {/* ===  */}
    </BaseContainer>
  )
}

export default AIOnboardingView
