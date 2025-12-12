export interface User {
  id: number
  role: string
  email: string
  email_verified: boolean
  customer: Customer
}

export interface Customer {
  id: number
  name: string
  phone: null
  sex: null
  birth_date: null
  address: null
  address_lat: null
  address_long: null
  personal_color: null
  profile_image_url: string
}
