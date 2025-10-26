import { getFileTypeFromUrl, getVideoThumbnail } from '@/shared/utils/file'
import { Flex, Image } from 'antd'
import { ReactNode, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BaseImage } from '../base-image/BaseImage'
import './BaseImagesPreview.scss'
const { PreviewGroup } = Image

const PlayIcon = () => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.65332 2.48926C4.78843 1.82713 6.14419 1.82711 7.2793 2.48926L7.28809 2.49414L14.0547 6.39062H14.0557C15.2143 7.0574 15.87 8.21629 15.8389 9.52246L15.8379 9.54297V9.56348C15.8379 10.8965 15.1688 12.0501 14.0225 12.7188L7.26465 16.6104L7.25586 16.6152C6.69147 16.9445 6.08692 17.1006 5.4541 17.1006C4.84083 17.1005 4.21427 16.9424 3.65332 16.6152C2.51077 15.9487 1.83803 14.7747 1.83789 13.4609V5.64355C1.83799 4.31069 2.50706 3.15791 3.65332 2.48926Z"
        fill="#49C3D0"
        stroke="#49C3D0"
        strokeWidth="3.5"
      />
    </svg>
  )
}

export interface BaseImagesPreviewProps {
  children: ReactNode
  fileCount?: boolean
  fileList: string[]
  start?: number
  visible: boolean
  setVisible: React.Dispatch<SetStateAction<boolean>>
}
export const BaseImagesPreview: React.FC<BaseImagesPreviewProps> = ({
  children,
  fileCount = true,
  fileList,
  start = 0,
  visible,
  setVisible,
}) => {
  const [thumbnails, setThumbnails] = useState<Record<number, string>>({})
  useEffect(() => {
    if (fileList.length) {
      fileList.forEach(async (url, idx) => {
        if (getFileTypeFromUrl(url) === 'video') {
          const thumb = await getVideoThumbnail(url)
          const thumbUrl = typeof thumb === 'string' ? thumb : URL.createObjectURL(thumb)
          setThumbnails((prev) => ({ ...prev, [idx]: thumbUrl }))
        }
      })
    }
  }, [fileList])
  const [current, setCurrent] = useState(start)
  useEffect(() => {
    setCurrent(start)
  }, [start])
  const [playing, setPlaying] = useState(false)
  const { fileType, source } = useMemo(() => {
    if (!fileList?.length) {
      return { source: undefined, fileType: undefined }
    }
    const source = fileList[current]
    const fileType = getFileTypeFromUrl(source)
    return {
      source,
      fileType,
    }
  }, [current, playing, fileList])

  const handleMoveAsset = (index: number) => {
    setCurrent(index)
    setPlaying(false)
  }

  const handleClosePreview = () => {
    setCurrent(0)
    setPlaying(false)
    setVisible(false)
  }

  if (!fileList.length) {
    return children
  }
  return (
    <div className="base-image-preview">
      <PreviewGroup
        items={fileList}
        preview={{
          current,
          visible,
          onVisibleChange: (visible) => {
            if (!visible) {
              handleClosePreview()
            }
          },
          imageRender: () => {
            return fileType === 'image' ? (
              <BaseImage src={source} alt="" objectFit="contain" className="base-image-preview__current-image" />
            ) : fileType === 'video' ? (
              <div className="base-image-preview__current-video">
                <ReactPlayer
                  src={source}
                  playing={playing}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onClick={() => setPlaying(false)}
                />
                {!playing && (
                  <div onClick={() => setPlaying(true)} className="base-image-preview__current-video__play__wrapper">
                    <div className="base-image-preview__current-video__play-icon">
                      <PlayIcon />
                    </div>
                  </div>
                )}
              </div>
            ) : null
          },
          toolbarRender: (
            _,
            {
              transform: { scale },
              actions: {
                onActive,
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomOut,
                onZoomIn,
                onReset,
                onClose,
              },
            },
          ) => (
            <div className="base-image-preview__item__wrapper">
              <Flex gap={16} justify="center">
                {fileList.map((url, i) =>
                  getFileTypeFromUrl(url) === 'image' ? (
                    <BaseImage
                      key={i}
                      src={url}
                      width={120}
                      height={120}
                      alt=""
                      className={`base-image-preview__item ${current !== i && 'base-image-preview__item--inactive'}`}
                      onClick={() => handleMoveAsset(i)}
                    />
                  ) : getFileTypeFromUrl(url) === 'video' ? (
                    thumbnails[i] ? (
                      <BaseImage
                        key={i}
                        src={thumbnails[i]}
                        width={120}
                        height={120}
                        alt=""
                        className={`base-image-preview__item ${current !== i && 'base-image-preview__item--inactive'}`}
                        onClick={() => handleMoveAsset(i)}
                      />
                    ) : null
                  ) : null,
                )}
              </Flex>
            </div>
          ),
          onChange: (index, prevCurrent) => {
            handleMoveAsset(index)
          },
        }}
      >
        <div className="base-image-preview__children">
          <div>{children}</div>
          {fileCount && (
            <div className="base-image-preview__count">
              {current + 1}/{fileList.length}
            </div>
          )}
        </div>
      </PreviewGroup>
    </div>
  )
}
