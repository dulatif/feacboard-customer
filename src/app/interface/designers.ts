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

export interface GetDetailDesignerQueryParams {
  id: ID | string
  with?: DesignerWithOption[]
}
