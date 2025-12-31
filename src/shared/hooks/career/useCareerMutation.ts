import { createCareer, deleteCareer, updateCareer } from '@/api/career'
import type { CreateCareerFormValues, UpdateCareerFormValues } from '@/shared/interface/career'
import { useMutation } from '@tanstack/react-query'

// # hooks
export const useCreateCareerMutation = () => {
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (data: CreateCareerFormValues) => {
      return await createCareer(data)
    },
  })

  return { mutate, mutateAsync, ...mutationStates }
}

export const useUpdateCareerMutation = () => {
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateCareerFormValues }) => {
      return await updateCareer(id, data)
    },
  })

  return { mutate, mutateAsync, ...mutationStates }
}

export const useDeleteCareerMutation = () => {
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (id: number) => {
      return await deleteCareer(id)
    },
  })

  return { mutate, mutateAsync, ...mutationStates }
}
