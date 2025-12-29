import { User } from '@/shared/interface/user'
import api from './index'

export const getProfile = async () => (await api.get('/user/profile')) as User
