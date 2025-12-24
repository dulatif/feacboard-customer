import { ID, LocaleName } from './general'

export interface Category {
  id: ID
  name: LocaleName
  localized_name: string
  icon: string
  needs_designer: boolean
}
