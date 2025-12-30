import { getToken, logout } from '@/shared/utils/auth'
import { API_URL } from '@/shared/utils/url'
import axios from 'axios'

const instances = axios.create({
  baseURL: API_URL,
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
  },
})

instances.interceptors.request.use(
  async (config) => {
    const token = await getToken()
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instances.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (err) => {
    const status = err?.response?.status
    const url = err?.config?.url ?? ''
    if (status === 401 && !url.includes('/login')) {
      logout()
      return Promise.reject(err)
    }
    return Promise.reject(err?.response?.data ?? err)
  },
)

export default instances

export interface ApiResponseError {
  message: string
  statusCode: number
}
