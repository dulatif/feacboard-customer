'use client'
import { createContext, ReactNode, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react'
import i18n from '../../i18n'
import { I18nextProvider } from 'react-i18next'
import { Spin } from 'antd'

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

  if (!isLanguageReady) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
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
