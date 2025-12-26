import { Faq } from '@/shared/interface/faq'
import api from './index'

export const getFaqList = async () => (await api.get('/faq')) as Faq[]

export const getFaqById = async (faqId: number) => (await api.get(`/faq/${faqId}`)) as Faq
