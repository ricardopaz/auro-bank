import axios from "axios"

import { getParams } from "."
import { findDealByName } from "./find-deals-by-name"
import { getCapitalizeString } from "@/utils/formatter"
import { getFinancialValor } from "@/pages/home-finance/utils"
import { PRODUCT, fonteMap, productsMap, productsStageMap } from "@/utils/constants"

export const createDeal = async props => {
  try {
    const { 
      cpf,
      cnpj,
      name, 
      valor,
      namepj,
      namepf,
      lead, 
      product,  
      utm_source, 
      utm_campaign,
    } = props

    const dealStage = productsStageMap[product]
    const convertName = getCapitalizeString(name || namepf || namepj)
    const dealName = `${cpf || cnpj} - ${convertName}`

    const { hasDeal } = await findDealByName(dealName, dealStage)
    
    if (hasDeal) return null

    const contact = await getContect(props)

    let dealValor = 0

    if (valor) {
      if (product === PRODUCT.FIN_IMOB) {
        dealValor = getFinancialValor(props)
      }
    }

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

const getContect = async props => {
  const { name, namepf, namepj, email, lead, phone, birthday } = props

  const phoneString = phone.replace(/\D/g, "")
  const convertName = getCapitalizeString(name || namepf || namepj)

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

  return contact
}