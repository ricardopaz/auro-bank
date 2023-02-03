import axios from "axios"

import { getParams } from "."
import { Moments } from "@/utils/constants"
import { currencyFormatter, stringToFloat } from "@/utils/formatter"
import { getFinancialValor } from "@/pages/home-finance/utils"

export const createActivitiesForFinancy = async (dealId, requestData) => {
  try {
    const { moment, state, valor, availableValor, availableValorFgts, income, banks, needContact } = requestData

    const financialValor = getFinancialValor(requestData)
    const entryValor = stringToFloat(availableValor) + (availableValorFgts ? stringToFloat(availableValorFgts) : 0)

    const { data } = await axios.post(
      `${process.env.RD_STATION_URL}/activities`, 
      getParams({ 
        activity: {
          deal_id: dealId,
          user_id: process.env.RD_STATION_DEFAULT_USER,
          text: `--- Informações adicionais para simulação ---

--- Valores
Valor do imóvel:   ${valor}
Entrada:   ${availableValor}
FGTS:   ${availableValorFgts || 'Não optou'}
Renda:   ${income}

--- Cálculo
Valor de entrada (entrada + fgts):   ${currencyFormatter.format(entryValor)} 
Valor a financiar (valor imóvel - entrada total):   ${currencyFormatter.format(financialValor)}

--- Informação adicional
Localização:   ${state}
Bancos:   ${banks.join(', ')}
Momento:   ${Moments[moment]}

Deseja especialista?  ${needContact ? 'Sim' : 'Não'}`
        }
      })
    )

    return data
  } catch (error) {
    throw new Error(error);
  }
}
