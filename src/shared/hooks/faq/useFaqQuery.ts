import { getFaqById, getFaqList } from '@/api/faq'
import { useQuery } from '@tanstack/react-query'

export const useFaqListQuery = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const queryKey = ['get-faq-list']
  const queryFn = async () => await getFaqList()
  return useQuery({ queryKey, queryFn, enabled })
}

export const useFaqDetailQuery = ({ enabled = true, faqId }: { enabled?: boolean; faqId?: number }) => {
  const queryKey = ['get-faq-detail', faqId]
  const queryFn = async () => await getFaqById(faqId!)
  return useQuery({ queryKey, queryFn, enabled: enabled && !!faqId })
}
