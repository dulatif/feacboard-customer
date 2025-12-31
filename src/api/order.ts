import api from './index'
import { GetOrderResponse, Order } from '@/shared/interface/order'

export const createOrder = async () => {
  return await api.post(`/order/checkout`)
}

export interface GetOrderParams {
  status?: 'pending' | 'paid' | 'cancelled' | 'completed' | 'expired'
}

export const getOrder = async (params?: GetOrderParams) => {
  const queryParams = new URLSearchParams()
  if (params?.status) {
    queryParams.append('status', params.status)
  }
  const queryString = queryParams.toString()
  const url = `/order${queryString ? `?${queryString}` : ''}`
  return (await api.get(url)) as GetOrderResponse
}

export const getDetailOrder = async (orderId: number) => {
  return (await api.get(`/order/${orderId}`)) as Order
}

export const payOrder = async (orderId: number) => {
  return await api.post(`/order/${orderId}/pay`)
}
