import { ID, MutationParams } from './general'

export interface DesignerEmployment {
  employed_at: string
  resigned_at: string | null
  fired_at: string | null
}

export interface DesignerService {
  id: ID
  name: string
  price: string
  images: string[]
}

export interface DesignerCategoryName {
  en: string
  ko: string
}

export interface DesignerCategory {
  id: ID
  name: DesignerCategoryName
  localized_name: string
  needs_designer: boolean
}

export interface Designer {
  id: ID
  name: string
  phone: string
  status: 'employed' | 'unemployed'
  category: DesignerCategory
  employment: DesignerEmployment | null
  services: DesignerService[]
  designer_identification_url: string | null
  certificate_of_cometence_url: string | null
}

export type DesignerWithOption =
  | 'employment'
  | 'services'
  | 'competenceCertificate'
  | 'designerIdentification'
  | 'category'

export interface GetAllDesignerQueryParams {
  name?: string
  location?: string
  category_id?: number | string
  status?: 'employed' | 'unemployed' | 'all'
  with?: DesignerWithOption[]
}

export interface GetAllDesignerMutationParams extends MutationParams<Designer[], GetAllDesignerQueryParams> {}

export interface GetDetailDesignerResponse {
  id: ID
  name: string
  phone: string
  bio: string
  status: 'employed' | 'unemployed'
}

export interface GetDetailDesignerQueryParams {
  id: ID | string
  with?: DesignerWithOption[]
}

export interface DesignerServiceDetail {
  id: ID
  name: string
  price: string
  images: {
    [key: string]: string | null
  }
}

export interface DesignerServiceCategory {
  id: ID
  name: string
}

export interface PaginationLinks {
  first: string | null
  last: string | null
  prev: string | null
  next: string | null
}

export interface PaginationMetaLink {
  url: string | null
  label: string
  page: number | null
  active: boolean
}

export interface PaginationMeta {
  current_page: number
  from: number
  last_page: number
  links: PaginationMetaLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface GetDesignerServicesQueryParams {
  id: ID | string
  category_id?: number | string
  name?: string
  per_page?: number
  page?: number
}

export interface GetDesignerServicesResponse {
  data: DesignerServiceDetail[]
  links: PaginationLinks
  meta: PaginationMeta
}
