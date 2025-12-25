import { Event, GetAllEventsParams } from '@/shared/interface/event'
import { cleanObj } from '@/shared/utils/params'
import api from './index'

export const getEventList = async (params?: GetAllEventsParams) => {
  if (params) {
    const queryParams = new URLSearchParams(cleanObj(params) as Record<string, string>).toString()
    return (await api.get(`/event?${queryParams}`)) as Event[]
  }
  return (await api.get('/event')) as Event[]
}

export const getShopEventList = async (shopId: number) => (await api.get(`/event/${shopId}/shop`)) as Event[]

export const getEventById = async (eventId: number) => (await api.get(`/event/${eventId}`)) as Event
