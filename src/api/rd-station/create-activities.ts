import axios from "axios"

import { getParams } from "."

export const createActivitiesForFinancy = async (dealId, requestData) => {
  try {
    const { moment, state, availableValor, availableValorFgts, income, banks, needContact } = requestData

    const { data } = await axios.post(
      `${process.env.RD_STATION_URL}/activities`, 
      getParams({ 
        activity: {
          deal_id: dealId,
          user_id: process.env.RD_STATION_DEFAULT_USER,
          text: `--- Informações adicionais para simulação ---

--- Valores
Entrada:   ${availableValor}
FGTS:   ${availableValorFgts}
Renda:   ${income}

--- Informação adicional
Momento:   ${moment}
Localização:   ${state}
Bancos:   ${banks.join(', ')}

Deseja especialista?  ${needContact ? 'Sim' : 'Não'}`
        }
      })
    )

    return data
  } catch (error) {
    throw new Error(error);
  }
}
