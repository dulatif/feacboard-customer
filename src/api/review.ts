import { StoreReviewBody } from '@/shared/interface/review'
import api from './index'

export const storeReview = async ({ body, orderId }: { orderId: number; body: StoreReviewBody }) => {
  return await api.post(`/order/${orderId}/review`, body)
}
