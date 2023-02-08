import { Stack } from '@chakra-ui/react'
import { Input } from '@/components/form/input'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { isValidName, isValidPhone, isValidCnpj, isValidEmail } from '@/utils/validators'

interface FinderForm {
  loading?: boolean
  errors?: { [x: string]: any } 
  register: UseFormRegister<FieldValues>,
}

const FinderFormCC: React.FC<FinderForm> = ({ errors, register, loading }) => {

  return (
    <Stack spacing="0.62rem" color={'white'}>
      <Input 
        name="namepj" 
        errors={errors}
        isDisabled={loading}
        borderBottomColor={'secondary.500'}
        borderColor={'secondary.500'}
        placeholder={'Nome e sobrenome'}
        label="Administrador da Empresa"
        register={register("namepj", { required: true, validate: isValidName })} 
        validateMessage="É preciso informar nome e sobrenome separados por espaço"
      />
      <Input 
        name="cnpj"
        label={'CNPJ'}
        errors={errors}
        placeholder="CNPJ"
        isDisabled={loading}
        mask="99.999.999/9999-99"
        borderBottomColor={'white'}
        borderColor={'secondary.500'}
        validateMessage="CNPJ inválido ou incompleto"
        register={register("cnpj", { validate: isValidCnpj })}
      />
      <Input 
        name="phone" 
        type="phone"
        errors={errors}
        isDisabled={loading}
        mask={'(99) 99999-9999'}
        borderBottomColor={'white'}
        borderColor={'secondary.500'}
        label={'Telefone (WhatsApp)'}
        placeholder={'(99) 99999-9999'}
        validateMessage="Número inválido ou incompleto"
        register={register("phone", { validate: isValidPhone })} 
      />
      <Input 
        name="email" 
        type="email"
        label={'Email'} 
        errors={errors}
        isDisabled={loading}
        borderBottomColor={'white'}
        borderColor={'secondary.500'}
        placeholder={'seuemail@email.com'} 
        validateMessage="Email inválido ou incompleto"
        register={register("email", { validate: isValidEmail })} 
      />
    </Stack>
  )
}

export default FinderFormCC
