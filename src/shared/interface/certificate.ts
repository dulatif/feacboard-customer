import type { LocaleName } from './general'

// # entity
export type CertificateType = 'certificate'
export type CertificateForType = 'shop' | 'designer'
export type CertificateStatus = 'approved' | 'pending' | 'rejected'

export interface Certificate {
  id: number
  name: LocaleName
  localized_name: string
  type: CertificateType
  for_type: CertificateForType
  status: CertificateStatus
  reason: string
  icon: string
  created_at: string
  updated_at: string
}

// # responses
export type GetCertificatesResponse = Certificate[]

// # params
export interface GetShopCertificatesParams {
  shopId: number
}

export interface GetDesignerCertificatesParams {
  designerId: number
}
