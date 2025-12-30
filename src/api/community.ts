import { CreatePost, GetPostResponse } from '@/shared/interface/community'
import api from './index'

export const getPost = async () => (await api.get(`/community/post`)) as GetPostResponse[]

export const createPost = async (body: CreatePost) => await api.post(`/community/post`, body)
