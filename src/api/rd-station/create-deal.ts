import axios from "axios"

import { getParams } from "."
import { findDealByName } from "./find-deals-by-name"
import { getCapitalizeString } from "@/utils/formatter"
import { customFields, fonteMap, productsMap, productsStageMap } from "@/utils/constants"

export const createDeal = async props => {
  try {
    const { 
      cpf, 
      name, 
      lead, 
      date, 
      phone,
      email,
      valor,
      product, 
      utm_source, 
      utm_campaign, 
    } = props

    const phoneString = phone.replace(/\D/g, "")
    const dealStage = productsStageMap[product]
    const convertName = getCapitalizeString(name)
    const dealName = `${phoneString} - ${convertName}`

    const { hasDeal } = await findDealByName(dealName)
    
    if (hasDeal) return null
    
    const contact = { 
      name: convertName, 
      organization_id: lead._id, 
      phones: [{ phone: phoneString, type: 'cellphone' }] 
    } as any

    if (date) {
      const [day, month, year] = date.split('/')
      contact.birthday = { day, month, year }
    }

    if (email) {
      contact.emails = [{ email }]
    }

    const { data } = await axios.post(
      `${process.env.RD_STATION_URL}/deals`, 
      getParams({
        contacts: [contact],
        organization: { _id: lead._id },
        deal_products: [{ 
          amount: 1,
          price: valor || 0,
          total: valor || 0,
          base_price: valor || 0,
          _id: productsMap[product],
        }],
        campaign: { name: utm_campaign ? utm_campaign : 'Sem Campanha' },
        deal_source: { _id: utm_source ? fonteMap[utm_source] : fonteMap.site },
        deal: {
          name: dealName,
          deal_stage_id: dealStage,
          user_id: process.env.RD_STATION_DEFAULT_USER, 
          deal_custom_fields: [
            // { value: cpf, custom_field_id: customFields.CPF },
          ] 
        },
      })
    )

    return data
  } catch (error) {
    throw new Error(error);
  }
}
