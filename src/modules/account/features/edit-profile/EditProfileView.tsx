'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Col, Flex, Row, Select, Space } from 'antd'
import Link from 'next/link'
import { CaretLeft, CaretRight, Trash } from 'phosphor-react'
import React from 'react'
const { Option } = Select

const Label = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography as="label" variant="aleo" size="body2" style={{ marginBottom: '6px', display: 'block' }}>
    {children}
  </BaseTypography>
)

const EditProfileView = () => {
  const breadcrumbs = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '계정 편집',
    },
  ]
  return (
    <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
      <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '48px' }} />
      <BaseButton
        color="secondary-neutral"
        icon={<CaretLeft weight="bold" size={20} />}
        style={{ marginBottom: '48px' }}
      >
        반품
      </BaseButton>

      <BaseBox shadow="lg" padding={{ x: 'spacing-48px', y: 'spacing-48px' }}>
        <Flex justify="space-between">
          <BaseTypography as="h6" size="subtitle1" weight="semibold" style={{ marginBottom: '24px' }}>
            프로필 편집
          </BaseTypography>
          <Link href="/my-account/edit-profile/delete-account">
            <BaseButton color="danger" size="xl" icon={<Trash size={24} weight="bold" />}>
              계정 삭제
            </BaseButton>
          </Link>
        </Flex>

        <Space direction="vertical" align="center" style={{ width: '100%', margin: '48px auto' }}>
          <Avatar src="/dummy/face03.png" size={128} style={{ marginBottom: '40px' }} />

          <Flex align="baseline" gap={8}>
            <BaseTypography as="p" size="body2" weight="semibold" style={{ marginBottom: '24px' }}>
              당신의 색깔 성격 :
            </BaseTypography>
            <BaseButton
              size={'xl'}
              icon={<CaretRight weight="bold" size={20} />}
              iconPosition="end"
              style={{ background: 'linear-gradient(79.64deg, #206F8C 0%, #49C3D0 100%)' }}
            >
              지금 색상 개인화를 시도해 보세요
            </BaseButton>
          </Flex>
        </Space>

        <Row gutter={48} style={{ marginBottom: '48px' }}>
          <Col span={8}>
            <Space size={24} direction="vertical" style={{ width: '100%' }}>
              <div>
                <Label>이름/닉네임</Label>
                <BaseInput value={'퍼컬귀요미'} />
              </div>
              <div>
                <Label>이름/닉네임</Label>
                <Flex gap={16}>
                  <BaseInput
                    value={'010-3541-1258'}
                    addonBefore={
                      <Select defaultValue={'+82'}>
                        <Option value={'+82'}>+82</Option>
                      </Select>
                    }
                  />
                  <BaseButton>확인하다</BaseButton>
                </Flex>
              </div>
              <div>
                <Label>성별 (SNS)</Label>
                <BaseInput value={'남자'} disabled />
              </div>
              <div>
                <Label>생년월일 (SNS)</Label>
                <BaseInput value={'1993.06.19'} disabled />
              </div>
            </Space>
          </Col>
          <Col span={16}>
            <div style={{ width: '50%' }}>
              <Label>지역</Label>
              <BaseInput value={'서울시 강남구'} />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122619.4598127116!2d126.98740202352262!3d37.5648761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20Korea%20Selatan!5e0!3m2!1sid!2sid!4v1759032827562!5m2!1sid!2sid"
              height={266}
              style={{ border: 0, width: '100%', marginTop: '16px', borderRadius: '16px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        <BaseButton size="xl" style={{ width: '100%' }}>
          <BaseTypography as="span" variant="aleo" size="body1" weight="semibold" color="white">
            구하다
          </BaseTypography>
        </BaseButton>
      </BaseBox>
    </BaseContainer>
  )
}

export default EditProfileView
