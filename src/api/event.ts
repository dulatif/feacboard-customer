import { Event } from '@/shared/interface/event'
import api from './index'

export const getEventList = async () => (await api.get('/event')) as Event[]

export const getShopEventList = async (shopId: number) => (await api.get(`/event/${shopId}/shop`)) as Event[]

export const getEventById = async (eventId: number) => (await api.get(`/event/${eventId}`)) as Event
