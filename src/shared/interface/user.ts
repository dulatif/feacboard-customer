export interface User {
  id: number
  role: string
  email: string
  email_verified: boolean
  profile_image_url: string
  customer: Customer
}

export interface Customer {
  id: number
  name: string
  phone: string
  sex: string
  birth_date: string
  address: string
  address_lat: string
  address_long: string
}
