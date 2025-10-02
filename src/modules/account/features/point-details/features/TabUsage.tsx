import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { DatePicker, Flex, Space } from 'antd'
import PointHistoryItem from './PointHistoryItem'
import { GalleryEdit, ReceiptEdit, ReceiptItem } from 'iconsax-reactjs'

const TabUsage = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <BaseTypography
          as="p"
          size="header5"
          weight="semibold"
          variant="aleo"
          style={{ marginBottom: '24px', marginTop: '36px', width: '100%' }}
        >
          포인트 내역
        </BaseTypography>
        <div>
          <DatePicker style={{ width: 130 }} format="YYYY-MM-DD" />
        </div>
      </Flex>

      <div style={{ marginBottom: '24px' }}>
        <BaseTypography as="p" size="subtitle1" weight="semibold" variant="aleo" style={{ marginBottom: '24px' }}>
          2025년 3월 30일 일요일
        </BaseTypography>
        <Space direction="vertical" style={{ width: '100%', marginBottom: '24px' }}>
          <PointHistoryItem title="퍼스널 컬러 진단" time="18:04 PM" icon={<ReceiptEdit />} points={-100} />
          <PointHistoryItem title="헤어 거래" time="18:04 PM" icon={<ReceiptItem />} points={3100} />
          <PointHistoryItem title="퍼스널 컬러 진단" time="18:04 PM" icon={<GalleryEdit />} points={-100} />
        </Space>
        <BaseTypography as="p" size="subtitle1" weight="semibold" variant="aleo" style={{ marginBottom: '24px' }}>
          2025년 3월 30일 일요일
        </BaseTypography>
        <Space direction="vertical" style={{ width: '100%', marginBottom: '24px' }}>
          <PointHistoryItem title="퍼스널 컬러 진단" time="18:04 PM" icon={<ReceiptEdit />} points={100} />
        </Space>
        <BaseTypography as="p" size="subtitle1" weight="semibold" variant="aleo" style={{ marginBottom: '24px' }}>
          2025년 3월 30일 일요일
        </BaseTypography>
        <Space direction="vertical" style={{ width: '100%', marginBottom: '24px' }}>
          <PointHistoryItem title="퍼스널 컬러 진단" time="18:04 PM" icon={<ReceiptEdit />} points={-300} />
        </Space>
        <Space direction="vertical" style={{ width: '100%', marginBottom: '24px' }}>
          <PointHistoryItem title="퍼스널 컬러 진단" time="18:04 PM" icon={<ReceiptEdit />} points={150} />
        </Space>
      </div>
    </>
  )
}

export default TabUsage
