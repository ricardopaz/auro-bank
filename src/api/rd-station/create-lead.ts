import axios from "axios"

import { findLead, getParams } from "."
import { getCapitalizeString } from "@/utils/formatter"
import { customFields } from "@/utils/constants"

export const createRdLead = async props => {
  try {
    const { name, namepf, namepj, cpf, cnpj, rdUserId } = props
    const leadName = `${cpf || cnpj} - ${getCapitalizeString(name || namepf || namepj)}`
    const existsLead = await findLead(leadName)

    if (existsLead?._id) return existsLead

    const { data } = await axios.post(
      `${process.env.RD_STATION_URL}/organizations`, 
      getParams({ 
        name: leadName, 
        user_id: rdUserId || process.env.RD_STATION_DEFAULT_USER,
        organization_custom_fields: [
          { value: cpf, custom_field_id: customFields.CPF },
          { value: cnpj, custom_field_id: customFields.CNPJ },
        ]
      })
    )

    return data
  } catch (error) {
    throw new Error(error);
  }
}
