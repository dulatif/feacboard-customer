// # enums / types
export enum EventType {
  EVENT = 'event',
  WEBINFO = 'web-info',
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
