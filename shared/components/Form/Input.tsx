import { ForwardRefRenderFunction } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Icon,
  Input as ChackraInput,
  InputProps as ChakraInputProps,
  Tooltip,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { RiQuestionLine } from 'react-icons/ri';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  tooltip?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, tooltip, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <Flex direction="row">
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        {!!tooltip && (
          <Tooltip label={tooltip}>
            <Box as="span" alignSelf="center">
              <Icon as={RiQuestionLine} />
            </Box>
          </Tooltip>
        )}
      </Flex>
      <ChackraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="blue.400"
        bgColor="gray.100"
        variant="filled"
        _hover={{
          bgColor: 'gray.300',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
