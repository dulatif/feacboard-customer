import { AxiosResponse } from 'axios'

export type ID = number | null
export type LocaleName = {
  en: string
  ko: string
}

export interface MutationParams<TData, TVariables> {
  onSuccess?: ((data: AxiosResponse<TData, any>, variables: TVariables, context: unknown) => unknown) | undefined
  onError?: ((error: Error, variables: TVariables, context: unknown) => unknown) | undefined
}

export interface DeleteDataResponse {
  message: string
}
export interface DeleteDataMutationParams extends MutationParams<number, DeleteDataResponse> {}
