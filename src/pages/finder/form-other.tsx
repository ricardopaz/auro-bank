import { Stack } from '@chakra-ui/react'
import { Input } from '@/components/form/input'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { RadioGroupButton } from '@/components/form/radio-group-button'
import { isValidName, isValidPhone, isValidCnpj, isValidEmail, isValidCpf } from '@/utils/validators'

interface FinderForm {
  type: string
  loading?: boolean
  setType(type: string): void
  errors?: { [x: string]: any } 
  register: UseFormRegister<FieldValues>
}

const FinderFormOther: React.FC<FinderForm> = ({ type, setType, errors, register, loading }) => {
  return (
    <Stack spacing="0.62rem" color={'white'}>
      <RadioGroupButton
        name="type"
        value={type}
        onChange={value => setType(value)}
        options={[{ value: 'PJ' }, { value: 'PF' }]} 
      />

      {type === 'PF' && (
        <>
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
        </>
      )}

      {type === 'PJ' && (
        <>
          <Input 
            name="razao"
            errors={errors}
            isDisabled={loading}
            label={'Razão Social'}
            register={register("razao")}
            borderColor={'secondary.500'}
            placeholder="Nome da empresa"
          />
          <Input 
            name="namepj"
            errors={errors}
            isDisabled={loading}
            borderColor={'secondary.500'}
            label="Administrador da Empresa"
            placeholder={'Nome e sobrenome'}
            register={register("namepj", { validate: isValidName })} 
            validateMessage="É preciso informar nome e sobrenome separados por espaço"
          />
          <Input 
            name="cnpj"
            label={'CNPJ'}
            errors={errors}
            placeholder="CNPJ" 
            isDisabled={loading}
            mask="99.999.999/9999-99"
            borderColor={'secondary.500'}
            validateMessage="CNPJ inválido ou incompleto"
            register={register("cnpj", { validate: isValidCnpj })}
          />
        </>
      )}

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

export default FinderFormOther
