import React from 'react'
import styles from '../AIOnboardingView.module.scss'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

export type TDiagnosisType = 'manual' | 'ai'
const DiagnosisTypeBadge = ({ type }: { type: TDiagnosisType }) => {
  const emojiurl = type === 'manual' ? '/dummy/diagnosis-manual-emoji.png' : '/dummy/diagnosis-ai-emoji.png'
  return (
    <div className={`${styles['diagnosis_badge']} ${styles[`diagnosis_badge--${type}`]}`}>
      <img src={emojiurl} alt={`${type} 진단`} width={24} height={24} />
      <BaseTypography as="p" size="body1">
        {type === 'manual' ? '수동 진단' : 'AI 진단'}
      </BaseTypography>
    </div>
  )
}

export default DiagnosisTypeBadge
