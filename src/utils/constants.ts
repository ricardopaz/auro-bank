export const PRODUCT = {
  CAPITAL_GIRO: 'CAPITAL_GIRO',
  ADIANTAMENTO_RECEB: 'ADIANTAMENTO_RECEB',
  HOME_EQUITY: 'HOME_EQUITY',
  FIN_VEICLE: 'FIN_VEICLE',
  SEGURO_LIFE: 'SEGURO_LIFE',
  SEGURO_SAUDE: 'SEGURO_SAUDE',
  SEGURO_PATR_EMP: 'SEGURO_PATR_EMP',
  SEGUROS: 'SEGUROS',
  FIN_IMOB: 'FIN_IMOB',
  CONS_AUTO: 'CONS_AUTO',
  CONS_IMOB: 'CONS_IMOB',
  AUTO_EQUITY: 'AUTO_EQUITY',
  PLANO_SAUDE: 'PLANO_SAUDE',
  PREV_PRIVATE: 'PREV_PRIVATE',
  INVEST: 'INVEST',
}

export const PRODUCTS_LABELS = {
  FIN_IMOB: 'Financiamento Imobiliário',
  FIN_VEICLE: 'Financiamento de Veículos',
  SEGUROS: 'Outros Seguros',
  SEGURO_LIFE: 'Seguro de vida em grupo',
  SEGURO_PATR_EMP: 'Seguro patrimonial / empresarial',
  SEGURO_SAUDE: 'Seguro saúde',
  CAPITAL_GIRO: 'Capital de Giro',
  CONS_AUTO: 'Consórcio de Automóvel/Moto',
  CONS_IMOB: 'Consórcio Imobiliário',
  ADIANTAMENTO_RECEB: 'Adiantamento de Recebíveis',
  HOME_EQUITY: 'Home Equity',
  AUTO_EQUITY: 'Auto Equity',
  PLANO_SAUDE: 'Plano de Saúde',
  PREV_PRIVATE: 'Previdência Privada',
  INVEST: 'Investimentos',
}

//--- RD Station constants

export const fonteMap = {
  site: '63d95b8da8fe14000c7dc8a1',
  google: '63da7904b9030b0016fbb599',
  facebook: '63da78ee9ebede00273af320',
}

export const productsMap = {
  [PRODUCT.FIN_IMOB]: '63da787ea993f8000b242acb',
  [PRODUCT.FIN_VEICLE]: '6489bb1b151d8c001bda8466',
  [PRODUCT.SEGUROS]: '6489bb24d6087e001c8843f4',
  [PRODUCT.SEGURO_LIFE]: '6489bb24d6087e001c8843f4',
  [PRODUCT.SEGURO_PATR_EMP]: '6489bb24d6087e001c8843f4',
  [PRODUCT.SEGURO_SAUDE]: '6489bb24d6087e001c8843f4',
  [PRODUCT.CAPITAL_GIRO]: '6489bb2a43468d000db8e411',
  [PRODUCT.CONS_AUTO]: '6489bb3f383137001ccd2b95',
  [PRODUCT.CONS_IMOB]: '6489bb4787c4870013067713',
  [PRODUCT.ADIANTAMENTO_RECEB]: '6489bb4f39f9d0001d0df165',
  [PRODUCT.HOME_EQUITY]: '6489bb568a55d2001dd47323',
  [PRODUCT.AUTO_EQUITY]: '6489bb5d383137001ccd2bd5',
  [PRODUCT.PLANO_SAUDE]: '6489bb6429fa20001887e12e',
  [PRODUCT.PREV_PRIVATE]: '6489bb6b29fa20001887e135',
  [PRODUCT.INVEST]: '6489bb7143468d0023b8eb3f',
}

export const productsStageMap = {
  [PRODUCT.FIN_IMOB]: '63d95b8ea8fe14000c7dc8ad',
  [PRODUCT.FIN_VEICLE]: '63dbf8b5c554d30010037544',
  [PRODUCT.SEGUROS]: '63e54c9287b0e00017d2dda6',
  [PRODUCT.SEGURO_LIFE]: '63e54c9287b0e00017d2dda6',
  [PRODUCT.SEGURO_PATR_EMP]: '63e54c9287b0e00017d2dda6',
  [PRODUCT.SEGURO_SAUDE]: '63e54c9287b0e00017d2dda6',
  [PRODUCT.CAPITAL_GIRO]: '6489b52a39f9d0001d0de3a5',
  [PRODUCT.CONS_AUTO]: '6489b84e0c8e93000d149b5c',
  [PRODUCT.CONS_IMOB]: '6489b85a39f9d0001d0deb1b',
  [PRODUCT.ADIANTAMENTO_RECEB]: '6489b52dd9eb88001a6b3b3f',
  [PRODUCT.HOME_EQUITY]: '6489b53f85dc270018804e96',
  [PRODUCT.AUTO_EQUITY]: '6489b54afef1840024eca7bb',
  [PRODUCT.PLANO_SAUDE]: '6489b55940a214000de094a8',
  [PRODUCT.PREV_PRIVATE]: '6489b569809b1600196668d5',
  [PRODUCT.INVEST]: '6489b573e592e4000d85e34b',
  ATENDIMENTO: '648a2711252e6a000dcc5dc3',
}

export const customFields = {
  CPF: '63dbfd0b43136c000c30b304',
  CNPJ: '63dbfd39cedf1b001073acd5',
  FINDER: '63ebae5ca51c7000128a4219',
  PRODUCT_DETAILS: '649220246235c0001a745198',
}

//--- Form constants

export const STATES = [
  'Acre',
  'Alagoas',
  'Amazonas',
  'Amapá',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Minas Gerais',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Pará',
  'Paraiba',
  'Pernambuco',
  'Piauí',
  'Paraná',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rondônia',
  'Roraima',
  'Rio Grande do Sul',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins',
]

export const Moments = {
  1: 'Estou buscando imóveis na internet e ainda não visitei nenhum',
  2: 'Estou começando a fazer visita em alguns imóveis',
  3: 'Estou negociando e devo fazer proposta nos próximos 30 dias',
  4: 'O proprietário já aceitou minha proposta e devo assinar o contrato em poucos dias',
}