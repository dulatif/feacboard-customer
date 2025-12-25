import { Designer, GetAllDesignerQueryParams } from '@/app/interface/designers'
import { cleanObj } from '@/shared/utils/params'
import api from './index'

export const getDesigner = async (params: GetAllDesignerQueryParams) => {
  const cleanedParams = cleanObj(params)

  // Handle array 'with' parameter for format: with[]=value1&with[]=value2
  const queryParams = new URLSearchParams()

  Object.entries(cleanedParams).forEach(([key, value]) => {
    if (key === 'with' && Array.isArray(value)) {
      value.forEach((item) => {
        queryParams.append('with[]', item)
      })
    } else {
      queryParams.append(key, String(value))
    }
  })

  return (await api.get(`/designer?${queryParams.toString()}`)) as Designer[]
}
