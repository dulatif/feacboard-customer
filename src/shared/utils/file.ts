export const getFileTypeFromUrl = (url: string): 'image' | 'video' | 'unknown' => {
  const cleanUrl = url.split('?')[0].split('#')[0]
  const ext = cleanUrl.split('.').pop()?.toLowerCase()

  if (!ext) return 'unknown'

  const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'avif', 'tiff', 'heic']
  const videoExts = ['mp4', 'webm', 'ogg', 'mov', 'avi', 'mkv', 'flv', 'wmv', '3gp']

  if (imageExts.includes(ext)) return 'image'
  if (videoExts.includes(ext)) return 'video'
  return 'unknown'
}

export const getVideoThumbnail = (url: string, seekTo: number = 1.0): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    video.src = url
    video.crossOrigin = 'anonymous'
    video.currentTime = seekTo
    video.muted = true

    video.addEventListener('loadeddata', () => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Cannot get 2D context'))
        return
      }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      canvas.toBlob((blob) => {
        if (blob)
          resolve(blob) // thumbnail dalam bentuk Blob
        else reject(new Error('Failed to create thumbnail blob'))
      }, 'image/jpeg')
    })

    video.addEventListener('error', (err) => reject(err))
  })
}
