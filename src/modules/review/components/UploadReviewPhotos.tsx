import { ReviewType } from '@/shared/interface/shop'
import { getToken } from '@/shared/utils/auth'
import { API_URL } from '@/shared/utils/url'
import type { GetProp, UploadFile, UploadProps } from 'antd'
import { Image, Upload } from 'antd'
import { Camera } from 'phosphor-react'
import React, { useState } from 'react'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

interface UploadReviewPhotosProps {
  maxLength?: number
  orderId: number
  type: ReviewType
}
const UploadReviewPhotos: React.FC<UploadReviewPhotosProps> = ({ maxLength = 5, orderId, type }) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const token = getToken() || ''

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList)

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <Camera size={20} />
      <div style={{ marginTop: 8 }}>
        사진 {fileList.length + 1} / {maxLength}
      </div>
    </button>
  )
  return (
    <>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none', width: 164, height: 164 }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
      <Upload
        action={`${API_URL}order/${orderId}/review-image`}
        name="image"
        data={{
          type,
        }}
        headers={{
          Authorization: `Bearer ${token}`,
        }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        accept="image/*"
        style={{ background: '#fff', borderStyle: 'solid' }}
      >
        {fileList.length >= maxLength ? null : uploadButton}
      </Upload>
    </>
  )
}

export default UploadReviewPhotos
