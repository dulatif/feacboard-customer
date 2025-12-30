// # entity
export interface Career {
  id: number
  company: string
  start_at: string
  end_at: string | null
  description: string
  designer_id?: number
  created_at?: string
  updated_at?: string
}

// # request
export interface CreateCareerFormValues {
  company: string
  start_at: string // Y-m-d
  end_at?: string | null // Y-m-d
  description: string
}

export interface UpdateCareerFormValues extends Partial<CreateCareerFormValues> {}

// # response
export type GetCareersResponse = Career[]
export type CreateCareerResponse = Career
export type UpdateCareerResponse = Career

// # params
export interface GetCareersParams {
  designerId: number
}
