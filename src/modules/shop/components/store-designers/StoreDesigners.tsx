import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'

export interface StoreDesignersProps {
  data: DesignerCardProps[]
}
export const StoreDesigners: React.FC<StoreDesignersProps> = ({ data }) => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      <BaseFlex gap="spacing-16px">
        <BaseInput size="large" placeholder="디자이너 이름으로 검색" />
        <BaseButton icon={<MagnifyingGlass size={24} />} size="xl">
          검색
        </BaseButton>
      </BaseFlex>
      {data.map((e, i) => (
        <DesignerCard key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
