import { getToken } from '@/shared/utils/auth'
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
    return res.data.data
  },
  async (err) => {
    if (err.response && err.response.status === 401) {
      await deleteToken()
      window.location.href = '/'
    }

    if (err.response?.data?.message_code === 404) {
      window.location.href = '/page-not-found'
    }

    return Promise.reject(err.response.data)
  },
)

export default instances
function deleteToken() {
  throw new Error('Function not implemented.')
}
