import { Banner } from '@/shared/interface/banner'
import api from './index'

export const getActiveBanners = async () => (await api.get('/banner/active')) as Banner[]
