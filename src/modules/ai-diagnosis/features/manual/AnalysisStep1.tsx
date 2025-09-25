import Image from 'next/image'

const AnalysisStep1 = () => {
  return (
    <>
      <Image
        src={'/dummy/manual-analysis-step-1.jpg'}
        alt="촬영 가이드 라인"
        width={1200}
        height={675}
        style={{ width: '100%', height: 'auto' }}
      />
    </>
  )
}

export default AnalysisStep1
