import axios from "axios"

import { findLead, getParams } from "."
import { getCapitalizeString } from "@/utils/formatter"

export const createRdLead = async ({ name, phone, rdUserId }) => {
  try {
    const leadName = `${phone.replace(/\D/g, "")} - ${getCapitalizeString(name)}`
    const existsLead = await findLead(leadName)

    if (existsLead?._id) return existsLead

    const { data } = await axios.post(
      `${process.env.RD_STATION_URL}/organizations`, 
      getParams({ 
        name: leadName, 
        user_id: rdUserId || process.env.RD_STATION_DEFAULT_USER
      })
    )

    return data
  } catch (error) {
    throw new Error(error);
  }
}
