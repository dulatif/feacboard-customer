export interface UploadReviewImageBody {
  image: File
  type: 'before' | 'after' | 'images'
}

export interface StoreReviewBody {
  type: 'before-after' | 'text' | 'images'
  review: string
  cleanlinest_rating: number
  hospitality_rating: number
  speed_rating: number
  designer_rating?: number
}
