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
}
const UploadReviewPhotos: React.FC<UploadReviewPhotosProps> = ({ maxLength = 5 }) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '/dummy/review-hair-makeup.webp',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: '/dummy/review-hair-makeup.webp',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: '/dummy/review-hair-makeup.webp',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: '/dummy/review-hair-makeup.webp',
    },
  ])

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
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        style={{ background: '#fff', borderStyle: 'solid' }}
      >
        {fileList.length >= maxLength ? null : uploadButton}
      </Upload>
    </>
  )
}

export default UploadReviewPhotos
