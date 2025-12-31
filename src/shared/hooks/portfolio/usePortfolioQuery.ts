import PortfolioService from '@/api/portfolio'
import { FindPortfolioParams, GetAllPortfolioParams } from '@/shared/interface/portfolio'
import { useQuery } from '@tanstack/react-query'

export const usePortfoliosQuery = (params: GetAllPortfolioParams) => {
  const designerId = params.designerId
  return useQuery({
    enabled: !!designerId,
    queryKey: ['portfolios', designerId, params],
    queryFn: () => PortfolioService.getAllPortfolios(params),
  })
}

export const usePortfolioQuery = (params: FindPortfolioParams) => {
  const { designerId, id } = params
  return useQuery({
    enabled: !!designerId && !!id,
    queryKey: ['portfolio', designerId, id],
    queryFn: () => PortfolioService.find({ designerId, id }),
  })
}
