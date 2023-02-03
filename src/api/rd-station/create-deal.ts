import axios from "axios"

import { getParams } from "."
import { findDealByName } from "./find-deals-by-name"
import { getCapitalizeString } from "@/utils/formatter"
import { getFinancialValor } from "@/pages/home-finance/utils"
import { fonteMap, productsMap, productsStageMap } from "@/utils/constants"

export const createDeal = async props => {
  try {
    const { 
      cpf,
      cnpj,
      name, 
      lead, 
      phone,
      email,
      product, 
      birthday, 
      utm_source, 
      utm_campaign,
    } = props

    const phoneString = phone.replace(/\D/g, "")
    const dealStage = productsStageMap[product]
    const convertName = getCapitalizeString(name)
    const dealName = `${cpf || cnpj} - ${convertName}`

    const { hasDeal } = await findDealByName(dealName)
    
    if (hasDeal) return null
    
    const contact = { 
      name: convertName, 
      organization_id: lead._id, 
      phones: [{ phone: phoneString, type: 'cellphone' }] 
    } as any

    if (birthday) {
      const [day, month, year] = birthday.split('/')
      contact.birthday = { day: parseInt(day), month: parseInt(month), year: parseInt(year) }
    }

    if (email) {
      contact.emails = [{ email }]
    }

    const dealValor = getFinancialValor(props)

    const { data } = await axios.post(
      `${process.env.RD_STATION_URL}/deals`, 
      getParams({
        contacts: [contact],
        organization: { _id: lead._id },
        deal_products: [{ 
          amount: 1,
          price: dealValor || 0,
          total: dealValor || 0,
          base_price: dealValor || 0,
          _id: productsMap[product],
        }],
        campaign: { name: utm_campaign ? utm_campaign : 'Sem Campanha' },
        deal_source: { _id: utm_source ? fonteMap[utm_source] : fonteMap.site },
        deal: {
          name: dealName,
          deal_stage_id: dealStage,
          user_id: process.env.RD_STATION_DEFAULT_USER,
        },
      })
    )

    return data
  } catch (error) {
    throw new Error(error);
  }
}
