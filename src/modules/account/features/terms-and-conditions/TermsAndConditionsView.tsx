'use client'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import React from 'react'

export const TermsAndConditionsView = () => {
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

const text = `1. 귀하의 동의
본 사이트를 이용함으로써 귀하는 본 이용 약관의 구속력을 받고 이를 준수하는 데 동의합니다. 본 이용 약관에 동의하지 않으시면 본 사이트를 이용하지 마십시오.

참고: 당사는 단독 재량으로 언제든지 본 이용 약관을 변경, 수정 또는 기타 방식으로 변경할 권리를 보유합니다. 달리 명시되지 않는 한, 수정 사항은 즉시 효력을 발생합니다. 본 이용 약관을 정기적으로 검토하시기 바랍니다. 변경 및/또는 수정 사항이 게시된 후에도 본 사이트를 계속 사용하는 경우, 귀하는 개정된 이용 약관 및 변경 사항 고지 기준의 합당성에 동의하는 것으로 간주됩니다. 참고로, 본 페이지는 본 이용 약관 상단에 표시된 날짜를 기준으로 최종 업데이트되었습니다.
2. 개인정보 보호
당사의 관행을 이해하려면 본 사이트 방문에 적용되는 개인정보 보호정책을 검토하십시오.

3. 링크된 사이트
본 사이트에는 다른 독립적인 제3자 웹사이트("링크된 사이트")로 연결되는 링크가 포함될 수 있습니다. 본 링크된 사이트는 오로지 방문자의 편의를 위해 제공됩니다. 당사는 이러한 링크된 사이트를 통제하지 않으며, 링크된 사이트의 콘텐츠(링크된 사이트에 포함된 정보 또는 자료 포함)에 대해 책임을 지지 않으며 보증하지 않습니다. 귀하는 링크된 사이트와의 상호 작용에 대해 스스로 독립적인 판단을 내려야 합니다.

4. 미래예측진술
본 사이트에 게재된 모든 자료는 최초 발행일 또는 제출일을 기준으로 합니다. 본 사이트에서 문서를 이용할 수 있다고 해서 해당 문서에 포함된 정보가 사건이나 후속 문서 또는 제출에 의해 수정 또는 대체되지 않았음을 의미하는 것은 아닙니다. 당사는 본 사이트에 포함된 정보나 진술을 업데이트할 의무나 정책이 없으므로, 귀하가 본 사이트에 접속한 날짜를 기준으로 해당 정보나 진술이 최신 정보라고 믿어서는 안 됩니다.

5. 보증의 부인 및 책임의 제한
A. 본 사이트에는 부정확한 내용 및 오타가 포함될 수 있습니다. 당사는 본 사이트에 게재되거나 배포되는 자료의 정확성이나 완전성, 또는 조언, 의견, 진술 또는 기타 정보의 신뢰성을 보증하지 않습니다. 귀하는 다음 사항을 명시적으로 이해하고 동의합니다. (i) 본 사이트에 포함된 의견, 조언, 진술, 각서 또는 정보에 대한 의존을 포함하여 본 사이트를 사용하는 것은 전적으로 귀하의 책임입니다. (ii) 본 사이트는 "있는 그대로" 및 "이용 가능한 대로" 제공됩니다. (iii) 여기에 명시적으로 규정된 경우를 제외하고, 상품성, 특정 목적에의 적합성, 숙련된 노력, 권리 및 비침해에 대한 묵시적 보증을 포함하되 이에 국한되지 않는 명시적 또는 묵시적 모든 종류의 보증을 부인합니다. (iv) 당사는 이 사이트, 광고 또는 제공된 제품이나 서비스 또는 관련 상인으로부터 얻을 수 있는 결과에 대해 어떠한 보증도 하지 않습니다. (v) 사이트 사용을 통해 다운로드하거나 다른 방법으로 얻은 모든 자료는 귀하의 재량과 위험에 따라 이루어집니다. (vi) 귀하는 해당 자료의 다운로드로 인해 발생하는 컴퓨터 시스템 손상 또는 데이터 손실에 대해 전적으로 책임을 집니다.

B. 귀하는 과실을 포함하되 이에 국한되지 않는 어떠한 상황에서도 당사 사이트, 자료 또는 해당 사이트의 기능의 사용 또는 사용 불능으로 인해 발생하는 직접적, 간접적, 우발적, 특별, 징벌적 또는 결과적 손해에 대해 당사가 책임을 지지 않는다는 점을 이해하고 동의합니다. 이는 당사가 그러한 손해의 가능성을 사전에 통보받았더라도 마찬가지입니다. 상기 제한 사항은 제한적 구제 수단의 본질적인 목적 달성 실패에도 불구하고 적용됩니다.

6. 제외 및 제한
일부 관할권에서는 특정 보증의 제외 또는 부수적 또는 결과적 손해에 대한 책임의 제한 또는 제외를 허용하지 않습니다. 따라서 해당 관할권에서 당사의 책임은 법률이 허용하는 최대 한도로 제한됩니다.
`
const Content = withMenu(() => {
  return (
    <BaseBox padding={{ x: 'spacing-48px', y: 'spacing-48px' }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          약관보기
        </BaseTypography>
        <BaseTypography
          as="p"
          size="body1"
          color="neutral-500"
          style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
        >
          {text}
        </BaseTypography>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Terms)
