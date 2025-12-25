import { getEventById, getEventList, getShopEventList } from '@/api/event'
import { GetAllEventsParams } from '@/shared/interface/event'
import { useQuery } from '@tanstack/react-query'

export const useEventListQuery = ({
  enabled = true,
  params,
}: {
  enabled?: boolean
  params?: GetAllEventsParams
} = {}) => {
  const queryKey = ['get-event-list', params]
  const queryFn = async () => await getEventList(params)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useShopEventListQuery = ({ enabled = true, shopId }: { shopId: number; enabled?: boolean }) => {
  const queryKey = ['get-shop-event-list', shopId]
  const queryFn = async () => await getShopEventList(shopId)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useEventDetailQuery = ({ enabled = true, eventId }: { enabled?: boolean; eventId?: number }) => {
  const queryKey = ['get-event-detail', eventId]
  const queryFn = async () => await getEventById(eventId!)
  return useQuery({ queryKey, queryFn, enabled: enabled && !!eventId })
}
