import { Facility } from '@/shared/interface/facility'
import api from './index'

export const getShopFacilities = async (shopId: number) => (await api.get(`/facility/${shopId}/shop`)) as Facility[]

export const getAllFacilities = async () => (await api.get('/facility')) as Facility[]
