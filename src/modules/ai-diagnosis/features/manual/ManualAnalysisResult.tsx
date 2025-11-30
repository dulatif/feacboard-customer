'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseSteps } from '@/shared/components/base-steps/BaseSteps'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import SaveIcon from '@/shared/components/icons/SaveIcon'
import ShareIcon from '@/shared/components/icons/ShareIcon'
import { Color } from '@/shared/types/color'
import { Col, Flex, Row, Space } from 'antd'
import { DiscountShape } from 'iconsax-reactjs'
import Image from 'next/image'
import Link from 'next/link'
import { CaretLeft, CaretRight, Star } from 'phosphor-react'
import { listSteps } from './ManualAnalysisView'
import styles from './ManualDiagnosis.module.scss'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'

interface ServiceItemProps {
  icon: string
  label: string
}

const ServiceItem = ({ icon, label }: ServiceItemProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={icon} alt={`${label} icon`} width={40} height={40} />
      <BaseTypography as="p" size="body1" style={{ marginTop: '12px' }}>
        {label}
      </BaseTypography>
    </div>
  )
}
const serviceItemsData: ServiceItemProps[] = [
  {
    icon: '/icons/nail.svg',
    label: '네일',
  },
  {
    icon: '/icons/hair.svg',
    label: '헤어',
  },
  {
    icon: '/icons/makeup.svg',
    label: '메이크업',
  },
  {
    icon: '/icons/beauty.svg',
    label: '미용/시술',
  },
]

interface SectionHeaderProps {
  leftText: string
  rightText: string
  icon: string
  textColor?: string
}

const SectionHeader = ({ leftText, rightText, icon, textColor = 'neutral-900' }: SectionHeaderProps) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <Flex justify="space-between" align="center" style={{ marginBottom: '24px' }}>
      <BaseTypography as="p" size={isMobile ? 'body1' : 'subtitle1'} weight="semibold" color={textColor as Color}>
        {leftText}
      </BaseTypography>
      <Space align="center" size={isMobile ? 8 : 16}>
        <Image src={icon} alt={`${rightText} icon`} width={isMobile ? 32 : 40} height={isMobile ? 32 : 40} />
        <BaseTypography as="p" size={isMobile ? 'body1' : 'subtitle1'} weight="semibold" color={textColor as Color}>
          {rightText}
        </BaseTypography>
        <CaretRight weight="bold" size={20} color={textColor === 'white' ? '#fff' : '#101828'} />
      </Space>
    </Flex>
  )
}

interface ShopCardProps {
  imageSrc: string
  shopName: string
  rating: number
  review: number
}

const ShopCard = ({ imageSrc, shopName, review, rating = 5 }: ShopCardProps) => {
  return (
    <BaseBox shadow="md" className={styles['card-shade']}>
      <Image src={imageSrc} alt={shopName} width={200} height={200} style={{ marginBottom: '16px' }} />
      <BaseTypography as="p" size="subtitle2" variant="aleo" weight="medium" style={{ marginBottom: 8 }}>
        {shopName}
      </BaseTypography>
      <div style={{ marginBottom: '8px' }}>
        <Space size={8}>
          <Star size={20} weight="fill" color="#FFB43F" />
          <BaseTypography as="p" size="body2" color="neutral-500">
            {rating} ({review} 리뷰)
          </BaseTypography>
        </Space>
      </div>
    </BaseBox>
  )
}

const ManualAnalysisResult = () => {
  const breadcrumbs = [
    {
      title: '홈',
    },
    {
      title: '예약 내역',
    },
    {
      title: '결과 색상 분석',
    },
  ]
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <BaseContainer className={styles['analysis_result']} variant={1440} padding={{ y: 'spacing-40px' }}>
      <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '48px' }} />
      <Link href="/ai-diagnosis/manual/analysis">
        <BaseButton
          color="secondary-neutral"
          icon={<CaretLeft weight="bold" size={20} />}
          style={{ marginBottom: '48px ' }}
        >
          기록 색상 분석으로 이동
        </BaseButton>
      </Link>

      <BaseSteps progressDot current={4} items={listSteps} style={{ marginBottom: '40px' }} />
      <Row gutter={48} style={{ marginBottom: '40px' }}>
        <Col span={isMobile ? 24 : 12}>
          <Image
            src={'/dummy/manual-analysis-result-1.jpg'}
            alt="촬영 가이드 라인"
            width={576}
            height={675}
            className={styles['analysis_result_img']}
            style={{ width: '100%', height: '100%', marginBottom: 24 }}
          />
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <div className={`${styles['card_color_item']} shadow-lg`} style={{ backgroundColor: '#E82825' }}>
            <Image src="/dummy/face-manual-analysis.png" alt="face manual analysis" width={312} height={412} />
            <BaseTypography
              as="p"
              variant="aleo"
              size="subtitle1"
              weight="semibold"
              color="white"
              style={{ marginTop: '32px' }}
            >
              비비드 - Vivid
            </BaseTypography>
          </div>
        </Col>
      </Row>

      <Flex justify="space-between">
        <div>
          <BaseTypography as="p" variant="aleo" size="header5" weight="medium" style={{ marginBottom: '16px' }}>
            정건우의 퍼스널 컬러 진단 결과
          </BaseTypography>
          <BaseButton icon={<SaveIcon />} size="2xl">
            내 주요 색상 개인으로 설정
          </BaseButton>
        </div>
        <BaseButton color="tertiary" icon={<ShareIcon />} size="xl">
          공유하다
        </BaseButton>
      </Flex>

      <Flex
        justify="space-between"
        align={largeScreen ? 'center' : 'flex-start'}
        vertical={isTablet || isMobile}
        className={styles['banner_promo']}
        gap={32}
        style={{ padding: isMobile ? 20 : 48 }}
      >
        <BaseFlex gap={isMobile ? 'spacing-12px' : 'spacing-32px'} align={isMobile ? 'flex-start' : 'center'}>
          <div className={styles['banner_promo_icon']}>
            <DiscountShape size={24} />
          </div>
          <BaseTypography as="p" variant="aleo" size="header6" weight="medium" color="white" style={{ flex: 1 }}>
            AI 가 정확한 퍼스널 컬러를 진단해드려요J
          </BaseTypography>
        </BaseFlex>
        <BaseFlex
          vertical={isMobile}
          gap={isMobile ? 'spacing-0px' : 'spacing-32px'}
          align={isMobile ? 'flex-start' : 'center'}
          style={{ paddingTop: isMobile || isTablet ? 20 : 0 }}
        >
          <div style={{ width: '200px', transform: 'translateY(-20px)' }}>
            <div>
              <BaseTypography as="p" size="caption" variant="aleo">
                시작 가격
              </BaseTypography>
              <BaseTypography as="p" size="subtitle1" variant="aleo" weight="semibold">
                11000원
              </BaseTypography>
            </div>
            <div className={styles['banner_promo_price']}>
              <BaseTypography as="p" size="caption" variant="aleo">
                지금은 오직
              </BaseTypography>
              <BaseTypography as="p" size="header5" variant="aleo" weight="semibold">
                5500원
              </BaseTypography>
            </div>
          </div>
          <BaseButton size="xl" iconPosition="end" icon={<CaretRight weight="bold" size={20} />}>
            지금 시도해보세요!
          </BaseButton>
        </BaseFlex>
      </Flex>

      <div style={{ marginBottom: '40px' }}>
        <Space size={16} style={{ marginBottom: '24px' }}>
          <Image src="/icons/makeup.svg" alt="makeup icon" width={40} height={40} />
          <BaseTypography as="p" size="subtitle1" weight="semibold">
            영역별 추천으로 바로가기
          </BaseTypography>
        </Space>
        <BaseTypography as="p" size="body1" weight="medium" color="neutral-500">
          얼음이 가득한 아이스 아메리카노가 절로 떠오르는 여름, 당신은 생기 넘치고 시원한 매력을 가진 &apos;여름 비비드
          타입&apos;일지도 몰라요. 선명하고 맑은 컬러들이 잘 어울리는 이 타입은, 핑크빛 음영 메이크업과 은은한 코랄
          컬러로 특유의 부드럽고 편안한 분위기를 더욱 돋보이게 할 수 있죠. 따사로운 햇살 아래에서도 자연스럽게 빛나는
          여름 비비드 타입의 매력, 당신도 직접 느껴보세요.
        </BaseTypography>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <BaseTypography as="p" size="subtitle1" weight="semibold" style={{ marginBottom: '24px' }}>
          여름 - 비비드 메이크업 팁
        </BaseTypography>
        <Flex gap={56} justify={isMobile ? 'space-evenly' : undefined}>
          {serviceItemsData.map((item, index) => (
            <ServiceItem {...item} key={index} />
          ))}
        </Flex>
      </div>

      <div style={{ padding: '40px 0px' }}>
        <SectionHeader
          leftText="당신을 위한 그늘 추천"
          rightText="쇼핑탭으로 이동"
          icon="/icons/shop.svg"
          textColor="#fff"
        />
        <Flex gap={24}>
          {Array.from({ length: largeScreen ? 3 : 2 }, (_, index) => (
            <BaseBox shadow="md" className={styles['card-shade']} key={index}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '10 / 10',
                  overflow: 'hidden',
                  borderRadius: 12,
                }}
              >
                <Image src="/dummy/lips-shade.jpg" alt="lips shade" fill style={{ marginBottom: '16px' }} />
              </div>
              <BaseTypography as="p" size="subtitle2" variant="aleo" weight="medium" style={{ marginBottom: 8 }}>
                영앤영헤어강남점
              </BaseTypography>
              <div style={{ marginBottom: '8px' }}>
                <Space size={8}>
                  <div style={{ width: 20, height: 20, backgroundColor: '#FF6774', borderRadius: '50%' }}></div>
                  <BaseTypography as="p" size="body2" color="neutral-500">
                    37번 그늘
                  </BaseTypography>
                </Space>
              </div>
              <Space>
                <Star size={15} weight="fill" color="#FFB43F" />
                <BaseTypography as="p" size="overline" color="neutral-500">
                  4.8 (129 리뷰)
                </BaseTypography>
              </Space>
              <BaseTypography as="p" size="subtitle2" variant="aleo" weight="semibold" textAlign="right">
                43000원
              </BaseTypography>
            </BaseBox>
          ))}
        </Flex>
      </div>

      <div
        style={{
          backgroundColor: '#F38F9E',
          padding: '40px 0px',
          position: 'relative',
          left: '50%',
          right: '50%',
          width: '100vw',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <BaseContainer variant={1440}>
          <SectionHeader
            leftText="우리동네 샵 추천"
            rightText="예약하러 가기"
            icon="/icons/hair.svg"
            textColor="white"
          />
          <Flex gap={24} wrap="wrap">
            {Array.from({ length: 4 }, (_, index) => (
              <ShopCard
                key={index}
                imageSrc={`/dummy/shop-${index + 1}.jpg`}
                shopName="영앤영헤어강남점"
                rating={4.8}
                review={129}
              />
            ))}
          </Flex>
        </BaseContainer>
      </div>
      <div style={{ padding: '40px 0px' }}>
        <SectionHeader leftText="디자이너별  추천" rightText="예약하러 가기" icon="/icons/hair.svg" />
        <Flex gap={24} wrap="wrap">
          {Array.from({ length: 4 }, (_, index) => (
            <ShopCard
              key={index}
              imageSrc={`/dummy/designer-${index + 1}.jpg`}
              shopName="영앤영헤어강남점"
              rating={4.8}
              review={129}
            />
          ))}
        </Flex>
      </div>
      <div
        style={{
          backgroundColor: '#3DADBF',
          padding: '40px 0px',
          position: 'relative',
          left: '50%',
          right: '50%',
          width: '100vw',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <div>
          <BaseContainer variant={1440}>
            <SectionHeader
              leftText="우리동네샵 추천"
              rightText="예약하러 가기"
              icon="/icons/nail.svg"
              textColor="white"
            />
            <Flex gap={24} wrap="wrap">
              {Array.from({ length: 4 }, (_, index) => (
                <ShopCard
                  key={index}
                  imageSrc={`/dummy/shop-${index + 1}.jpg`}
                  shopName="영앤영헤어강남점"
                  rating={4.8}
                  review={129}
                />
              ))}
            </Flex>
          </BaseContainer>
        </div>
      </div>
    </BaseContainer>
  )
}

export default ManualAnalysisResult
