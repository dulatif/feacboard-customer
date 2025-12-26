import api from './index'
import {
  StoreServiceToCartBody,
  GetCartResponse,
  UpdateCartBody,
  CheckCartStatusResponse,
} from '@/shared/interface/cart'

export const storeServiceToCart = async ({ body, serviceId }: { serviceId: number; body: StoreServiceToCartBody }) => {
  return await api.post(`/cart/add/${serviceId}`, body)
}

export const getCart = async () => {
  return (await api.get(`/cart/self`)) as GetCartResponse
}

export const deleteServiceFromCart = async ({ cartId }: { cartId: number }) => {
  return await api.delete(`/cart/remove/${cartId}`)
}

export const updateCart = async (body: UpdateCartBody) => {
  return await api.put(`/cart/update`, {
    ...body,
  })
}

export const checkCartStatus = async (serviceId: number) => {
  return (await api.get(`/cart/check/${serviceId}`)) as CheckCartStatusResponse
}
