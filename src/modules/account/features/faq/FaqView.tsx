'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseCollapse, BaseCollapseProps } from '@/shared/components/base-collapse/BaseCollapse'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useFaqListQuery } from '@/shared/hooks/faq/useFaqQuery'
import DOMPurify from 'dompurify'
import { Spin } from 'antd'
import { useMemo } from 'react'

export const FaqView = () => {
  const breadcrumbItems = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: 'FAQ',
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
  const { largeScreen, isTablet } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'

  const { data: faqs, isLoading } = useFaqListQuery()

  // Transform FAQ data to collapse items with sanitized HTML
  const items: BaseCollapseProps['items'] = useMemo(() => {
    if (!faqs) return []

    return faqs.map((faq) => ({
      key: String(faq.id),
      label: `Q. ${faq.question}`,
      children: (
        <div
          className="rich-text-content"
          style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#737373',
          }}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(faq.answer) }}
        />
      ),
    }))
  }, [faqs])

  return (
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          자주묻는질문
        </BaseTypography>
        {isLoading ? (
          <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
            <Spin />
          </BaseFlex>
        ) : items.length === 0 ? (
          <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
            <BaseTypography as="p" size="body1" color="neutral-500">
              등록된 FAQ가 없습니다.
            </BaseTypography>
          </BaseFlex>
        ) : (
          <BaseCollapse items={items} expandIconPosition="end" />
        )}
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Faq)
