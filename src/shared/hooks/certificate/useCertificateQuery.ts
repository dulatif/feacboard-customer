import { getShopCertificates, getDesignerCertificates } from '@/api/certificate'
import type { GetShopCertificatesParams, GetDesignerCertificatesParams } from '@/shared/interface/certificate'
import { useQuery } from '@tanstack/react-query'

// # hooks
/**
 * Hook to fetch certificates for a specific shop
 * @param params - Shop ID and optional enabled flag
 */
export const useGetShopCertificatesQuery = ({
  shopId,
  enabled = true,
}: GetShopCertificatesParams & { enabled?: boolean }) => {
  const queryKey = ['get-shop-certificates', shopId]
  const queryFn = async () => await getShopCertificates({ shopId })

  return useQuery({
    queryKey,
    queryFn,
    enabled,
  })
}

/**
 * Hook to fetch certificates for a specific designer
 * @param params - Designer ID and optional enabled flag
 */
export const useGetDesignerCertificatesQuery = ({
  designerId,
  enabled = true,
}: GetDesignerCertificatesParams & { enabled?: boolean }) => {
  const queryKey = ['get-designer-certificates', designerId]
  const queryFn = async () => await getDesignerCertificates({ designerId })

  return useQuery({
    queryKey,
    queryFn,
    enabled,
  })
}
