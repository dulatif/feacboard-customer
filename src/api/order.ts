import api from './index'
import { GetOrderResponse, Order } from '@/app/interface/order'

export const createOrder = async () => {
  return await api.post(`/order/checkout`)
}

export const getOrder = async () => {
  return (await api.get(`/order`)) as GetOrderResponse
}

export const getDetailOrder = async (orderId: number) => {
  return (await api.get(`/order/${orderId}`)) as Order
}

export const payOrder = async (orderId: number) => {
  return await api.post(`/order/${orderId}/pay`)
}
