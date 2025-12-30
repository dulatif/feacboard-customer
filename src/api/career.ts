import api from './index'
import type {
  GetCareersParams,
  GetCareersResponse,
  CreateCareerFormValues,
  CreateCareerResponse,
  UpdateCareerFormValues,
  UpdateCareerResponse,
} from '@/shared/interface/career'

// # constants
const ENDPOINT_DESIGNER = '/designer'
const ENDPOINT_PROFILE = '/user/profile/career'

// # handlers
/**
 * Get careers for a specific designer
 */
export const getDesignerCareers = async ({ designerId }: GetCareersParams): Promise<GetCareersResponse> => {
  return await api.get(`${ENDPOINT_DESIGNER}/${designerId}/careers`)
}

/**
 * Create a new career entry
 */
export const createCareer = async (data: CreateCareerFormValues): Promise<CreateCareerResponse> => {
  return await api.post(ENDPOINT_PROFILE, data)
}

/**
 * Update an existing career entry
 */
export const updateCareer = async (id: number, data: UpdateCareerFormValues): Promise<UpdateCareerResponse> => {
  return await api.put(`${ENDPOINT_PROFILE}/${id}`, data)
}

/**
 * Delete a career entry
 */
export const deleteCareer = async (id: number): Promise<void> => {
  return await api.delete(`${ENDPOINT_PROFILE}/${id}`)
}
