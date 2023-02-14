import { Stack } from '@chakra-ui/react'
import { Input } from '@/components/form/input'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { isValidName, isValidPhone, isValidEmail, isValidCpf } from '@/utils/validators'

interface FinderForm {
  loading?: boolean
  errors?: { [x: string]: any } 
  register: UseFormRegister<FieldValues>
}

const FinderFormOnlyPf: React.FC<FinderForm> = ({ errors, register, loading }) => {
  return (
    <Stack spacing="0.62rem" color={'white'}>
      <Input 
        name="namepf" 
        label={'Nome'}
        errors={errors}
        isDisabled={loading}
        borderBottomColor={'white'}
        borderColor={'secondary.500'}
        placeholder="Nome do cliente"
        register={register("namepf", { required: true, validate: isValidName })} 
        validateMessage="É preciso informar nome e sobrenome separados por espaço"
      />
      <Input 
        name="cpf"
        label={'CPF'}
        errors={errors}
        placeholder="CPF" 
        isDisabled={loading}
        mask="999.999.999-99"
        borderColor={'secondary.500'}
        validateMessage="CPF inválido ou incompleto"
        register={register("cpf", { validate: isValidCpf })}
      />
      <Input 
        name="phone" 
        type="phone"
        errors={errors}
        isDisabled={loading}
        mask="(99) 99999-9999"
        borderColor={'secondary.500'}
        placeholder="(99) 99999-9999" 
        label={'Telefone (WhatsApp)'}
        validateMessage="Número inválido ou incompleto"
        register={register("phone", { validate: isValidPhone })} 
      />
      <Input 
        name="email" 
        type="email"
        errors={errors}
        label={'Email'}
        isDisabled={loading}
        borderColor={'secondary.500'}
        placeholder="seuemail@email.com"
        validateMessage="Email inválido ou incompleto"
        register={register("email", { validate: isValidEmail })} 
      />
    </Stack>
  )
}

export default FinderFormOnlyPf
