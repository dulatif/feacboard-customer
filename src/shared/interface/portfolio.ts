export enum PortfolioType {
  GENERAL = 'general',
  BEFORE_AFTER = 'before_after',
}
export enum PhotoType {
  GENERAL = 'general',
  BEFORE = 'before',
  AFTER = 'after',
}

export interface PhotoFile {
  id: string
  url: string
  photo_type: PhotoType
}
export interface Portfolio {
  id: number
  designer_id: number
  service_title?: string
  type: PortfolioType
  photos: PhotoFile[]
  before_photos: PhotoFile[]
  after_photos: PhotoFile[]
  created_at: string
  updated_at: string
}

export interface GetAllPortfolioParams {
  designerId: number
  type: PortfolioType
}

export interface FindPortfolioParams {
  designerId: number
  id: number
}
