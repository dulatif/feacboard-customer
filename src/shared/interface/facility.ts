// # entity interfaces
export interface FacilityName {
  en: string
  ko: string
}

export interface Facility {
  id: number
  name: FacilityName
  localized_name: string
  icon: string
}
