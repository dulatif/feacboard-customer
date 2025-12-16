import { create } from 'zustand'

export interface FilterState {
  location: string
  name: string
  setLocation: (location: string) => void
  setName: (name: string) => void
}

export const useFilterStore = create<FilterState>((set) => ({
  location: '',
  name: '',
  setLocation: (location) => set({ location }),
  setName: (name) => set({ name }),
}))
