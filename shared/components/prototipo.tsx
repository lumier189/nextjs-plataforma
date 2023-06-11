import {
  Box,
  Flex,
  Text,
  Square,
  SimpleGrid,
  Card,
  CardHeader,
  Divider,
  Icon,
  Progress,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { useState } from 'react';
import Data from './Data';
import VideoContainer from './prototipo';
import NextClass from './NextClass';


export default function Home({ data }: any) {
  const [isvideo, setvideo] = useState({
    name: 'teste',
    videoSrc: Data[0].videoSrc,
  });
  return (
    <Flex
      color="white"
      maxH="60vh"
      marginTop="10vh"
      mr="50px"
      ml="50px"
    >

      {/* video container */}
      {/* <VideoContainer data={isvideo}></VideoContainer> */}
      <Box
        minW="75%"
        bg="dark"
        // w={{
        //   base: '100%',
        //   sm: '560px',
        //   md: '560px',
        //   lg: '840px',
        //   xl: '840px',
        // }}
        // h={{
        //   base: '300px',
        //   sm: '315px',
        //   md: '315px',
        //   lg: '473px',
        //   xl: '473px',
        // }}
        // allowFullScreen
        as="video"
        controls
        src={data.videoSrc}
        poster={data.imgSrc}
        objectFit="contain"
      >
      </Box>
      
      {/* proximas aulas */}
      <NextClass data={Data}></NextClass>
      {/* <SimpleGrid
        mr="50px"
        minW="25%"
        maxW="100%"
        maxH="auto"
        overflowY="auto"
        __css={{
          '&::-webkit-scrollbar': {
            w: '2',
          },
          '&::-webkit-scrollbar-track': {
            w: '6',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: `gray.100`,
          },
        }}
      >
        <Card borderRadius={20} ml={10}>
          <CardHeader>
            <Text fontSize={30}>Docker</Text>
          </CardHeader>
          <CardBody>
            {Data &&
              Data.map((data) => (
                <Flex borderRadius={15} mb={5} key={data.videoName}>
                  <Flex
                    flexDir="column"
                    justifyContent="space-between"
                    borderRadius={15}
                    key={data.videoName}
                    minH="82px"
                    bg="white"
                    h="auto"
                    w="94%"
                    m="10px"
                    bgImage={data.imgSrc}
                    bgSize="100%"
                    backgroundRepeat="no-repeat"
                  >
                    <Box h="100%">
                      <Flex>
                        <Text
                          align="end"
                          bg="black"
                          opacity="50%"
                          borderRadius=""
                          fontSize={15}
                        >
                          10:40
                        </Text>
                        <Divider></Divider>
                      </Flex>
                    </Box>

                    <Box alignItems="end">
                      <Progress
                        borderRadius={15}
                        colorScheme="purple"
                        value={80}
                      />
                    </Box>
                  </Flex>
                  <Box w="70%">
                    <Text fontSize={20}>1 . Introdução</Text>
                  </Box>
                </Flex>
              ))}
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </SimpleGrid> */}
    </Flex>
  );
}

