export interface GetPostResponse {
  id: number
  owner: {
    id: number
    name: string
    phone: string
    sex: string
    birth_date: string
    address: string
    address_lat: string
    address_long: string
    personal_color: string
  }
  description: string
  images: {
    url: string
  }[]
  likes_count: number
  created_at: string
}

export interface CreatePost {
  description: string
}
