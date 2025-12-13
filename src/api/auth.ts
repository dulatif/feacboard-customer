import { User } from '@/app/interface/user'
import api from './index'

export interface LoginGoogleResponse {
  user: User
  api_token: string
}
export const loginGoogle = async (params: string) => {
  const response = (await api.get(`/auth/google/callback?${params}`)) as LoginGoogleResponse
  return response
}
