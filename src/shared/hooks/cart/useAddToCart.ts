import { checkCartStatus } from '@/api/cart'
import { useStoreServiceToCartMutation } from './useCartMutation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export interface UseAddToCartReturn {
  handleAddToCart: (serviceId: number) => void
  handleDirectBuy: (serviceId: number) => void
  isAppointmentModalOpen: boolean
  isDiffProviderModalOpen: boolean
  isCheckingCartStatus: boolean
  isStoreServiceToCartPending: boolean
  setIsAppointmentModalOpen: (open: boolean) => void
  setIsDiffProviderModalOpen: (open: boolean) => void
  handleSubmitAppointment: (params: { date: string; time: string; serviceId?: number }) => void
  handleDiffProviderConfirm: () => void
  handleDiffProviderCancel: () => void
  handleAppointmentModalCancel: () => void
}

export const useAddToCart = (): UseAddToCartReturn => {
  const router = useRouter()
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isDiffProviderModalOpen, setIsDiffProviderModalOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState<number>()
  const [pendingAction, setPendingAction] = useState<'addToCart' | 'directBuy' | null>(null)
  const [isCheckingCartStatus, setIsCheckingCartStatus] = useState(false)

  const { mutate: storeServiceToCartMutate, isPending: isStoreServiceToCartPending } = useStoreServiceToCartMutation()

  const handleAddToCartDirect = (serviceId: number, date?: string, time?: string) => {
    storeServiceToCartMutate(
      {
        body: {
          ...(date && time ? { date, time } : {}),
        },
        serviceId,
      },
      {
        onSuccess: () => {
          setIsAppointmentModalOpen(false)
          setIsDiffProviderModalOpen(false)
          setSelectedServiceId(undefined)
          setPendingAction(null)
          if (pendingAction === 'directBuy') {
            router.push('/cart')
          }
        },
      },
    )
  }

  // Check cart status manually
  const checkCartStatusAndHandle = async (serviceId: number) => {
    setIsCheckingCartStatus(true)
    try {
      const response = await checkCartStatus(serviceId)
      setIsCheckingCartStatus(false)

      const status = response.status

      if (status === 'diff-provider') {
        // Show diff provider confirm modal
        setIsDiffProviderModalOpen(true)
      } else if (status === 'continue') {
        // Directly add to cart without date/time
        handleAddToCartDirect(serviceId)
      } else if (status === 'no-cart') {
        // Show appointment modal to select date/time
        setIsAppointmentModalOpen(true)
      }
    } catch (error) {
      setIsCheckingCartStatus(false)
      console.error('Error checking cart status:', error)
    }
  }

  const handleAddToCart = (serviceId: number) => {
    setSelectedServiceId(serviceId)
    setPendingAction('addToCart')
    // Check cart status first
    checkCartStatusAndHandle(serviceId)
  }

  const handleDirectBuy = (serviceId: number) => {
    setSelectedServiceId(serviceId)
    setPendingAction('directBuy')
    // Check cart status first
    checkCartStatusAndHandle(serviceId)
  }

  const handleSubmitAppointment = ({ date, time, serviceId }: { date: string; time: string; serviceId?: number }) => {
    const id = serviceId || selectedServiceId
    if (id) {
      handleAddToCartDirect(id, date, time)
    }
  }

  const handleDiffProviderConfirm = () => {
    setIsDiffProviderModalOpen(false)
    // Show appointment modal after confirm
    setIsAppointmentModalOpen(true)
  }

  const handleDiffProviderCancel = () => {
    setIsDiffProviderModalOpen(false)
    setSelectedServiceId(undefined)
    setPendingAction(null)
  }

  const handleAppointmentModalCancel = () => {
    setIsAppointmentModalOpen(false)
    setSelectedServiceId(undefined)
    setPendingAction(null)
  }

  return {
    handleAddToCart,
    handleDirectBuy,
    isAppointmentModalOpen,
    isDiffProviderModalOpen,
    isCheckingCartStatus,
    isStoreServiceToCartPending,
    setIsAppointmentModalOpen,
    setIsDiffProviderModalOpen,
    handleSubmitAppointment,
    handleDiffProviderConfirm,
    handleDiffProviderCancel,
    handleAppointmentModalCancel,
  }
}
