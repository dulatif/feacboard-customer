import { GetAllShopQueryParams, Shop } from '@/app/interface/shop'
import { cleanObj } from '@/shared/utils/params'
import api from './index'

export interface GetShopCategoryResponse {
  id: number
  title: string
  titleInEnglish: string
  slug: string
  icon?: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export const getShopCategory = async () => {
  return (await api.get('/v1/category-shop')) as GetShopCategoryResponse[]
}

export interface GetShopResponse {
  id: string
  userId: string
  categoryId: number
  name: string
  slug: string
  telp: string
  instagram: string
  email: string
  phone: string
  profilePicture: string
  status: string
  approvedAt: string
  restaurantCertificateUrl: string
  restaurantCertificateName: string
  registrationStatus: string
  createdAt: string
  updatedAt: string
  deletedAt: any
  category: Category
  ShopLocation: ShopLocation[]
}

export interface Category {
  id: number
  title: string
  titleInEnglish: string
  slug: string
  createdAt: string
  updatedAt: string
  deletedAt: any
}

export interface ShopLocation {
  id: number
  shopId: string
  address: string
  latitude: string
  longitude: string
  createdAt: string
  updatedAt: string
  deletedAt: any
}

export const getShop = async (params: GetAllShopQueryParams) => {
  const queryParams = new URLSearchParams(cleanObj(params) as Record<string, string>).toString()

  return (await api.get(`/shop?${queryParams}`)) as Shop[]
}
