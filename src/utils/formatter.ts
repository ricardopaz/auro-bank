export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const getQueryParams = params => {
  return new URLSearchParams(params).toString()
}

export const getQueryDate = (date, isStart?) => {
  const dateParser = new Date(date)

  if (isStart) {
    dateParser.setHours(0, 0, 0)
  } else {
    dateParser.setHours(20, 59, 0)
  }

  const [dateSplited] = dateParser.toISOString().split('.')
  return `${dateSplited}-00:00`
}

export const getCapitalizeString = text => 
  text.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase());

export const stringToFloat = valor => 
  parseFloat(valor.replace('R$', '').replace(/\./g, '').replace(',', '.')) 