import { FindPortfolioParams, GetAllPortfolioParams, Portfolio } from '@/shared/interface/portfolio'
import api from './index'

class PortfolioService {
  static async getAllPortfolios(params: GetAllPortfolioParams) {
    return (await api.get(`/designer/${params.designerId}/portfolio`, {
      params,
    })) as Portfolio[]
  }

  static async find(params: FindPortfolioParams) {
    return (await api.get(`/designer/${params.designerId}/portfolio/${params.id}`)) as Portfolio
  }
}

export default PortfolioService
