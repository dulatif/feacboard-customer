// # entity
/**
 * Category types for customer service tickets
 * - inquiry-form: Service inquiries (login, partner invitation, usage, etc.)
 * - comments-and-suggestions: Comments and suggestions (proposals, complaints, etc.)
 * - advertising-affiliate-inquiries: Advertising/affiliate inquiries
 */
export type CustomerServiceCategory = 'inquiry-form' | 'comments-and-suggestions' | 'advertising-affiliate-inquiries'

export interface CustomerServiceTicket {
  id: number
  category: CustomerServiceCategory
  title: string
  description: string
  created_at: string
  updated_at: string
}

// # schemas / form values
export interface CreateTicketFormValues {
  category: CustomerServiceCategory
  title: string
  description: string
}

// # constants
export const CUSTOMER_SERVICE_CATEGORY_MAP: Record<string, CustomerServiceCategory> = {
  inquiry: 'inquiry-form',
  'comments-and-suggestions': 'comments-and-suggestions',
  'advertising-affiliate-inquiries': 'advertising-affiliate-inquiries',
}

export const CUSTOMER_SERVICE_CATEGORY_LABELS: Record<CustomerServiceCategory, string> = {
  'inquiry-form': '문의 양식',
  'comments-and-suggestions': '의견과 제안',
  'advertising-affiliate-inquiries': '광고 / 제휴 문의',
}

// # responses
export interface CreateTicketResponse {
  message: string
  data: CustomerServiceTicket
}
