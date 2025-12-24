import api from './index'

export const createOrder = async () => {
  return await api.post(`/order/checkout`)
}

export interface GetOrderResponse {
  data: Data[]
}
export interface Data {
  id: number
  name: string
  phone: string
  address: string
  date: string
  start_at: string
  end_at: string
  shop_name: string
  shop_category: 'Nail'
  rate: number
  shop_category_icon_url: string
  provider_type: string
  provider_name: string
  price: string
  status: 'pending' | 'in-progress' | 'completed' | 'failed'
  items: Item[]
}

export interface Item {
  id: number
  order_id: number
  service_id: number
  variant_id: any
  service_name: string
  service_price: string
  variant_name: any
  created_at: string
  updated_at: string
}

export const getOrder = async () => {
  return (await api.get(`/order`)) as GetOrderResponse
}

export const getDetailOrder = async (orderId: number) => {
  return (await api.get(`/order/${orderId}`)) as Data
}
