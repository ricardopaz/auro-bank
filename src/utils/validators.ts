export const isValidName = (name: string) => name.split(' ').length >= 2

export const isValidCpf = (cpf: string) => cpf.replace(/\D/g, "").length === 11

export const isValidPhone = (phone: string) => phone.replace(/\D/g, "").length === 13

export const isValidDate = (date: string) => date.replace(/\D/g, "").length === 8

export const isValidCep = (cep: string) => cep.replace(/\D/g, "").length === 8

export const isValidEmail = (email: string) => 
  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
