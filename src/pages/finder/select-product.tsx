import React from 'react'

import { Checkbox, VStack } from '@chakra-ui/react'
import { PRODUCT, PRODUCTS_LABELS } from '@/utils/constants'

interface SelectProducts {
  products: string[]
  setProducts(products: string[]): void
}

export const SelectProduct: React.FC<SelectProducts> = ({ products, setProducts }) => {
  const onChange = (product, isChecked) => {
    if (isChecked) {
      setProducts(products.filter(prod => prod !== product))
    } else {
      setProducts([...products, product])
    }
  }

  const getProduct = product => {
    const isChecked = products.includes(product)
    return (
      <Checkbox
        size={'lg'}
        key={product}
        color={'white'}
        colorScheme={'secondary'}
        isChecked={isChecked}
        onChange={() => onChange(product, isChecked)}
      >
        {PRODUCTS_LABELS[product]}
      </Checkbox>
    )
  }

  return (
    <VStack alignItems="flex-start" w={'100%'}>
      {Object.keys(PRODUCT).map(getProduct)}
    </VStack>
  )
}