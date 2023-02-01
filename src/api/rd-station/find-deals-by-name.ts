import axios from "axios"

import { getQueryParams } from "."

export const findDealByName = async name => {
  try {
    const queryParams = { 
      name,
      page: 1,
      limit: 1,
      closed_at_period: false,
    } as any

    const { data } = await axios.get(
      `${process.env.RD_STATION_URL}/deals?${getQueryParams(queryParams)}`, 
    )

    return { hasDeal: data.total > 0 }
  } catch (error) {
    throw new Error(error);
  }
}
