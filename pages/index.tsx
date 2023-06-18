import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const fullCycle =
    'https://cdn.discordapp.com/attachments/727458678638379082/1117567640173555872/image.png';
  const guiaDev =
    'https://cdn.discordapp.com/attachments/727458678638379082/1117564883622449343/image.png';

  return (
    <Flex
      justifyContent={'center'}
      py={[0,6]}
      height={['auto', '100vh']}
      flexDir={['column', 'row']}
      alignItems={'center'}
    >
      <Box
        margin={[0,50]}
        onClick={() =>
          window.open('https://github.com/arthurspk/guiadevbrasil')
        }
        _hover={{
          transform: 'scale(1.1)',
          transition: 'transform .5s ease',
        }}
        transition="transform .5s ease"
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          
          h={['auto', '210px']}
          bg={'gray.100'}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <img src={guiaDev} alt="teste" />
        </Box>
        <Stack border={'blue'} height={280}>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            LISTA - NOVA GUIA
          </Text>
          <Heading
            textColor={'#0DA8FF'}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            Guia completo para devs
          </Heading>
          <Text color={'gray.500'}>
            Você encontrará conteúdos para te guiar e ajudar a se
            tornar um desenvolvedor ou se especializar em qualquer
            área de TI. Caso você já atue como desenvolvedor ou em
            outra área, confira o repositório para descobrir novas
            ferramentas para o seu dia-a-dia, caminhos possíveis e as
            tecnologias para incorporar na sua stack com foco em se
            tornar um profissional atualizado e diferenciado em
            front-end, back-end, dentre outras.
          </Text>
        </Stack>
      </Box>
      <Box
        onClick={() => router.push('/full-cycle')}
        _hover={{
          transform: 'scale(1.1)',
          transition: 'transform .5s ease',
        }}
        transition="transform .5s ease"
        margin={50}
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={['auto', '210px']}
          bg={'gray.100'}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <img src={fullCycle} alt="teste" />
        </Box>
        <Stack height={280}>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            CURSO
          </Text>
          <Heading
            textColor={'#0DA8FF'}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            Full Cyle
          </Heading>
          <Text color={'gray.500'}>
            Muitos alunos consideram o curso Full Cycle mais
            enriquecedor do que uma pós-graduação pelo fato dele estar
            sempre refletindo as exigências do mercado agregando na
            teoria e na prática o que realmente um dev precisa saber
            para evoluir na carreira. Não dependa mais de
            universidades que muitas vezes são caras e que possuem
            grades curriculares totalmente defasadas.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}
