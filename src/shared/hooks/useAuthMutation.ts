import { loginGoogle } from '@/api/auth'
import { useMutation } from '@tanstack/react-query'
import { login } from '../utils/auth'
import { useRouter } from 'next/navigation'

export const useLoginGoogle = () => {
  const router = useRouter()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (token: string) => {
      const response = await loginGoogle(token)
      return response
    },
    onSuccess: (response) => {
      login(response.api_token).then((res) => {
        // TODO: handle email verification here
        /* if (!response.user.email_verified) {
                  window.location.href = '/register/status'
                  return
                } */
        router.push('/')
      })
    },
  })
  return { mutate, mutateAsync, ...mutationStates }
}
