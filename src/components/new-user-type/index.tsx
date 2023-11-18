import { Box, Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

export const NewUserType=()=>{
const [value,setValue]=useState('individual')
    return   <Box py={5}>

    <RadioGroup onChange={setValue} value={value}>
    <Stack spacing={'6'}>
      <Radio value='individual'>
      <Stack spacing={'1'}>

<Text as={'span'} fontWeight={'medium'}>
Individual

</Text>
<Text as={'span'} fontSize={'sm'} color={'gray.500'}>
I want to join the community
</Text>
</Stack>
      </Radio>
      <Radio value='nutritionist'>
      <Stack spacing={'1'}>

<Text as={'span'} fontWeight={'medium'} >
Nutritionist

</Text>
<Text as={'span'} fontSize={'sm'} color={'gray.500'}>
I want to contribute as a nutritionist
</Text>
</Stack>
      </Radio>
    </Stack>
  </RadioGroup>
<Button px={'8'} my={6}>Continue</Button>
    </Box>
}