import { Flex, Grid, GridItem, useRadio, useRadioGroup, UseRadioProps } from "@chakra-ui/react"

interface RadioItemProps extends UseRadioProps {
  children: React.ReactNode;
}

const RadioItem: React.FC<RadioItemProps> = props => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <GridItem as='label'>
      <input {...input} />
      <Flex
        {...checkbox}
        py={{ base: 3 }}
        px={{ base: 2, md: 5 }}
        fontSize={{ base: '0.80rem', md: '0.9rem' }}
        color="white"
        boxShadow="md"
        cursor="pointer"
        borderRadius="md"
        alignItems="center"
        borderWidth={1}
        borderColor={'white'}
        transition="all 0.3s"
        justifyContent="center"
        _checked={{
          bg: 'white',
          fontWeight: 'bold',
          color: 'primary.500',
        }}
        _hover={{ fontWeight: 'bold' }}
        _focus={{ boxShadow: 'outline' }}
        _disabled={{
          opacity: 0.5,
          cursor: 'not-allowed',
          _hover: { color: 'white' }
        }}
      >
        {props.children}
      </Flex>
    </GridItem>
  )
}

interface RadioGroupButtonProps {
  name: string
  value: string
  defaultValue?: string
  onChange(value: string): void
  options: { value: string, disabled?: boolean }[]
}

export const RadioGroupButton: React.FC<RadioGroupButtonProps> = props => {
  const { options, name, defaultValue, value, onChange } =  props

  const { getRadioProps } = useRadioGroup({
    name,
    value,
    onChange,
    defaultValue,
  })

  return (
    <Grid 
      gap={2}
      templateColumns={{ base: 'repeat(2, 1fr)', md: `repeat(${options.length}, 1fr)`}} 
    >
      {options.map((option) => {
        const radio = getRadioProps({ value: option.value })
        return (
          <RadioItem key={option.value} isDisabled={option.disabled} {...radio}>
            {option.value}
          </RadioItem>
        )
      })}
    </Grid>
  )
}