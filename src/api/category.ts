import { Category } from '@/shared/interface/category'
import api from './index'

export const getShopCategory = async () => {
  return (await api.get('/shop/category')) as Category[]
}
export const getDesignerCategory = async () => {
  return (await api.get('/designer/category')) as Category[]
}
