import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
        <Input placeholder="username / email" variant="filled" mb={3} type="email"></Input>
        <Input placeholder="******" variant="filled" mb={6} type="password"></Input>
        <Button mb={6} colorScheme="teal">Login</Button>
        <Button onClick={toggleColorMode}>Mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
