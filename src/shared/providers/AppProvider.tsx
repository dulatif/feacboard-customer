'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import { BaseSpin } from '../components/base-spin/BaseSpin'
import { checkToken } from '../utils/auth'

export interface AppContextType {
  language: string
  changeLanguage: (lang: string) => void
  setLanguage: Dispatch<SetStateAction<AppContextType['language']>>
  totalCart: number
  setTotalCart: Dispatch<SetStateAction<AppContextType['totalCart']>>
  appointment: {
    date: string
    time: string
  } | null
  setAppointment: Dispatch<SetStateAction<AppContextType['appointment']>>
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<AppContextType['isAuthenticated']>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLanguageReady, setIsLanguageReady] = useState(false)
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ko'
    i18n.changeLanguage(savedLang).then(() => setIsLanguageReady(true))
  }, [])

  const [language, setLanguage] = useState<string>('ko')
  const [totalCart, setTotalCart] = useState(0)
  const [appointment, setAppointment] = useState<AppContextType['appointment']>(null)

  useEffect(() => {
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      setLanguage(savedLang)
      i18n.changeLanguage(savedLang)
    } else {
      i18n.changeLanguage('en')
    }
  }, [])

  useEffect(() => {
    i18n.changeLanguage(language)
    localStorage.setItem('lang', language)
  }, [language])

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    ;(async () => {
      const res = await checkToken()
      setIsAuthenticated(res.loggedIn)
    })()
  }, [])

  if (!isLanguageReady) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BaseSpin size="large" />
      </div>
    )
  }
  return (
    <AppContext.Provider
      value={{
        language,
        changeLanguage,
        setLanguage,
        totalCart,
        setTotalCart,
        appointment,
        setAppointment,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within a AppProvider')
  }
  return context
}
