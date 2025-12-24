import api from './index'

export interface StoreServiceToCartBody {
  service_variant_id?: number
  date: string
  time: string
}
export const storeServiceToCart = async ({ body, serviceId }: { serviceId: number; body: StoreServiceToCartBody }) => {
  return await api.post(`/cart/add/${serviceId}`, body)
}

export interface GetCartResponse {
  data: Data | null
}
export interface Data {
  id: number
  shop_id: number
  provider_type: 'shop' | 'designer'
  provider: Provider
  name: string
  phone: any
  address: any
  date: string
  start_at: string
  end_at: string
  items: Item[]
}

export interface Provider {
  id: number
  name: string
  status: string
  phone: string
  person_in_charge: string
  address: string
  address_lat: string
  address_long: string
  rating: number
  review_count: number
  open_hour_today: string
}

export interface Item {
  id: number
  service: Service
}

export interface Service {
  id: number
  name: string
  price: string
  image: string
}
export const getCart = async () => {
  return (await api.get(`/cart/self`)) as GetCartResponse
}

export const deleteServiceFromCart = async ({ cartId }: { cartId: number }) => {
  return await api.delete(`/cart/remove/${cartId}`)
}

export interface UpdateCartBody {
  date?: string
  time?: string
  name?: string
  phone?: string
  notes?: string
}
export const updateCart = async (body: UpdateCartBody) => {
  return await api.put(`/cart/update`, {
    ...body,
    address: 'testing',
  })
}
