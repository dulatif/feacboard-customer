import { Designer } from './designers'
import { ID, MutationParams } from './general'

export interface Shop {
  id: ID
  name: string
  status: string
  phone: string
  person_in_charge: string
  address: string
  address_lat: string
  address_long: string
  designers: Designer[]
}

export interface GetAllShopQueryParams {
  name?: string
  location?: string
  category_id?: number | string
  with?: 'designers.services'
}
export interface GetAllShopMutationParams extends MutationParams<Shop[], GetAllShopQueryParams> {}

type TWith = 'openHours'
export interface GetDetailShopQueryParams {
  id: ID | string
  with?: TWith[]
}
