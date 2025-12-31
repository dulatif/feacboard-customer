import api from './index'
import type {
  GetCertificatesResponse,
  GetShopCertificatesParams,
  GetDesignerCertificatesParams,
} from '@/shared/interface/certificate'

// # constants
const ENDPOINT = '/certificate'

// # handlers
/**
 * Get certificates for a specific shop
 * @param params - Shop ID
 * @returns Promise with array of certificates
 */
export const getShopCertificates = async ({ shopId }: GetShopCertificatesParams): Promise<GetCertificatesResponse> => {
  return await api.get(`${ENDPOINT}/${shopId}/certificates`)
}

/**
 * Get certificates for a specific designer
 * @param params - Designer ID
 * @returns Promise with array of certificates
 */
export const getDesignerCertificates = async ({
  designerId,
}: GetDesignerCertificatesParams): Promise<GetCertificatesResponse> => {
  return await api.get(`${ENDPOINT}/${designerId}/certificates`)
}
