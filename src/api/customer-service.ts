import api from './index'
import type { CreateTicketFormValues, CreateTicketResponse } from '@/shared/interface/customer-service'

// # constants
const ENDPOINT = '/customer-service'

// # handlers
/**
 * Create a new customer service ticket
 * @param data - Ticket form values (category, title, description)
 * @returns Promise with created ticket data
 */
export const createTicket = async (data: CreateTicketFormValues): Promise<CreateTicketResponse> => {
  return await api.post(ENDPOINT, data)
}
