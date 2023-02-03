import { stringToFloat } from "@/utils/formatter"

export const getFinancialValor = ({ valor, availableValor, availableValorFgts }) => {
  const imoValue = stringToFloat(valor)
  const entryValue = stringToFloat(availableValor)
  const fgtsValue = availableValorFgts ? stringToFloat(availableValorFgts) : 0
  
  return  imoValue - (entryValue + fgtsValue)
}
