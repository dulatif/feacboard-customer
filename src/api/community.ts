import { CreatePost, GetPostResponse } from '@/shared/interface/community'
import api from './index'

export const getPost = async () => (await api.get(`/community/post`)) as GetPostResponse[]

export const createPost = async (body: CreatePost) => await api.post(`/community/post`, body)

export interface GetPopularCommunityResponse {
  data: {
    owner: Owner
    description: string
    images: {
      id: any
      url: string
    }[]
    likes_count: number
    comments_count: number
    created_at: string
  }[]
}
export interface Owner {
  id: number
  name: string
  phone: any
  sex: any
  birth_date: any
  address: any
  address_lat: any
  address_long: any
  personal_color: any
  user: {
    profile_image_url: string
  }
}
export const getPopularCommunity = async () => {
  return (await api.get(`/community/post/popular?limit=4`)) as GetPopularCommunityResponse
}
