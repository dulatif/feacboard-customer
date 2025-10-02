import { BaseButton } from '@/shared/components/base-button/BaseButton'

export const reviewTypes = [
  { value: 'text', label: '텍스트만' },
  { value: 'media', label: '사진이나 영상으로' },
  { value: 'both', label: '이전과 이후를 함께' },
]

interface ReviewTypeButtonProps {
  value: string
  active: boolean
  children: React.ReactNode
  onClick: (value: string) => void
}

const ReviewTypeButton = ({ value, active, children, onClick }: ReviewTypeButtonProps) => (
  <BaseButton onClick={() => onClick(value)} color={active ? 'primary' : 'secondary-neutral'}>
    {children}
  </BaseButton>
)

export default ReviewTypeButton
