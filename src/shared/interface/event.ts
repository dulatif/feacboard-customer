// # enums / types
export enum EventType {
  EVENT = 'event',
  WEBINFO = 'web-info',
}

export enum EventStatus {
  CURRENT = 'current',
  ENDED = 'ended',
}

// # entity interfaces
export interface Event {
  id: number
  title: string
  publish_date: string
  type: EventType
  content: string
  thumbnail: string
  thumbnails: string[]
  created_at: string
  updated_at: string
}

// # params
export interface GetAllEventsParams {
  type: EventType
  status?: EventStatus
  sort_by?: 'title' | 'publish_date' | 'created_at'
  sort_order?: 'asc' | 'desc'
}
