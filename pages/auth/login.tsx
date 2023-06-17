import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Link as ChakraLink,
  Text,
  useToast,
  Checkbox,
  AspectRatio,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Input } from '@/shared/components/Form/Input';
import { useAuth } from '@/shared/hooks/auth.hook';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const toast = useToast();

  const { handleSignIn } = useAuth();

  const { errors } = formState;

  var emailField = '';

  useEffect(() => {
    if (!!errors.email || !!errors.password) {
      toast({
        title: 'Email e Senha são obrigatórios',
        status: 'error',
        position: 'top-left',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [errors, toast]);

  return (
    <Box fontFamily=' "Manrope", sans-serif'>
      <Flex
        // backgroundImage="/assets/logokkk.jpg"
        backgroundRepeat="no-repeat"
        bgSize="100%"
        width="100vw"
        height="100vh"
        direction="row"
        // bgColor="black"
      >
        {/* <Image
                  src="/assets/logokkk.jpg"
                  alt="Pautaforma logo"
                  width="201px"
                  paddingBottom="65px"
                /> */}
        <Flex
          as="form"
          flex="2"
          display="flex"
          flexDirection="row"
          height="100%"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Flex flex="2" flexDirection="column" align="center">
            <Box alignItems="start" minW="360px" w="40%">
              <Text
                alignSelf="start"
                fontSize="24px"
                fontWeight="bold"
                marginBottom="10px"
                // color="black"
              >
                Bem-vindo!
              </Text>
              <Text
                alignSelf="start"
                fontSize="16px"
                fontWeight="normal"
                color="gray"
                marginBottom="45px"
                line-height="22px"
              >
                LOGIN NA PAUTAFORMA
              </Text>
            </Box>
            <Box
              flex="2"
              display="flex"
              flexDirection="column"
              alignItems="center"
              w="40%"
              minW="360px"
            >
              <Stack spacing="10" w="100%">
                <FormControl id="email">
                  <FormLabel fontWeight="bold">E-mail</FormLabel>
                  <Input
                    defaultValue={
                      localStorage.getItem('PAUTAFORMA::EMAIL') ?? ''
                    }
                    type="email"
                    border={'1px solid #E2E8F0'}
                    bg={'transparent'}
                    placeholder="nome@exemplo.com"
                    // error={errors.email}
                    // _hover={'none'}
                    {...register('email')}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel fontWeight="bold">Senha</FormLabel>
                  <InputGroup>
                    <Input
                      border={'1px solid #E2E8F0'}
                      type={showPassword ? 'text' : 'password'}
                      bg={'transparent'}
                      placeholder="8 dígitos no mínimo"
                      // error={errors.password}
                      // _hover={'none'}
                      {...register('password')}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        // variant={'ghost'}
                        bg={'transparent'}
                        onClick={() =>
                          setShowPassword(
                            (showPassword) => !showPassword
                          )
                        }
                      >
                        {showPassword ? (
                          <ViewIcon />
                        ) : (
                          <ViewOffIcon />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <Flex
                w="100%"
                direction="row"
                justifyContent="space-between"
                marginTop="20px"
                marginBottom="10px"
              >
                <Checkbox
                  type="rememberMe"
                  w="100%"
                  colorScheme="blue"
                  marginTop="10px"
                  color="#718096"
                  iconColor="white"
                  borderColor="lightgray"
                  defaultChecked
                  {...register('rememberMe')}
                >
                  Lembrar-me
                </Checkbox>
                <Link href="">
                  <ChakraLink
                    w="100%"
                    alignSelf="initial"
                    marginTop="10px"
                    textDecoration="none"
                  >
                    <Text
                      textAlign="end"
                      alignSelf="end"
                      fontSize="md"
                      fontWeight="normal"
                      color="#131313"
                    >
                      Esqueceu a senha?
                    </Text>
                  </ChakraLink>
                </Link>
              </Flex>
              <Button
                type="submit"
                marginTop="6"
                colorScheme="blue"
                minW="360px"
                w="100%"
                size="lg"
                color="#FFFFFF"
                fontSize="14px"
                isLoading={formState.isSubmitting}
              >
                Entrar
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
