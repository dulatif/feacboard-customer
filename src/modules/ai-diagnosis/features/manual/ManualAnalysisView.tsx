'use client'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'

import { BaseSteps } from '@/shared/components/base-steps/BaseSteps'
import AnalysisStep1 from './AnalysisStep1'
import styles from './ManualDiagnosis.module.scss'
import AnalysisStep2 from './AnalysisStep2'
import AnalysisStep3 from './AnalysisStep3'
import AnalysisStep4 from './AnalysisStep4'

const ManualAnalysisView = () => {
  const [step, setStep] = useState(3)
  const listSteps = [
    { title: '촬영 가이드 라인에 얼굴을 맞추고', description: '촬영 버튼을 클릭해주세요' },
    {
      title: '포시즌 컬러 셀렉션',
      description: '4계절 컬러 셀렉션 룸',
    },
    {
      title: '서브톤을 선택하세요',
      description: '세부적으로 서브톤을 선택하세요',
    },
    {
      title: '가장 좋은 색상을 선택하세요',
      description: '가장 좋은 색상을 선택하세요',
    },
  ]
  return (
    <BaseContainer
      variant="fullwidth"
      className={styles['manual_analysis']}
      padding={{ y: 'spacing-48px', x: 'spacing-0px' }}
    >
      <BaseButton
        color="secondary-neutral"
        icon={<CaretLeft weight="bold" size={20} />}
        onClick={() => (step === 1 ? (window.location.href = '/ai-diagnosis/manual') : setStep(step - 1))}
      >
        반품
      </BaseButton>
      <div style={{ marginTop: 48 }}>
        <BaseSteps progressDot current={step - 1} items={listSteps} style={{ marginBottom: '40px' }} />

        {/* ---- content ----*/}
        <div className={styles['analysis_content']}>
          {step === 1 && <AnalysisStep1 />}
          {step === 2 && <AnalysisStep2 />}
          {step === 3 && <AnalysisStep3 />}
          {step === 4 && <AnalysisStep4 />}
          <BaseButton size="2xl" style={{ width: '100%', marginTop: '40px' }} onClick={() => setStep(step + 1)}>
            {step === 1 ? '촬영 시작' : step === 2 ? '서브톤 선택' : step === 3 ? '퍼스널컬러 진단' : '결과 확인'}
          </BaseButton>
        </div>
        {/* ================ */}
      </div>
    </BaseContainer>
  )
}

export default ManualAnalysisView
