import {
  Text,
  Box,
  Card,
  CardBody,
  Flex,
  Progress,
  SimpleGrid,
} from '@chakra-ui/react';
import { useCourses } from '../hooks/courses.hook';
import { CheckIcon } from '@chakra-ui/icons';

function NextClass() {
  const { currentClass, handleChangeVideo, isPlaying } = useCourses();
  const bg =
    'https://cdn.discordapp.com/attachments/940151959489499209/1097231567757246557/image.png';
  return (
    <SimpleGrid
      minW={'545px'}
      maxW={'545px'}
      background={'whiteAlpha.50'}
      marginTop={'46px'}
      borderRadius={'20px'}
      border-radius="20px"
      height={'715px'}
      maxH={'100%'}
      overflowY="auto"
      sx={{
        '::-webkit-scrollbar': {
          width: '10px',
          marginRight: '50px',
          horizontal: {
            display: 'none',
          },
        },
        '::-webkit-scrollbar-thumb': {
          background: '#0DA8FF',
        },
      }}
    >
      <Card
        background={'whiteAlpha.50'}
        opacity={1}
        border-radius="20px"
      >
        <CardBody>
          {currentClass &&
            currentClass?.sections?.map((section: any) => (
              <Flex
                onClick={() => handleChangeVideo(section.id)}
                _hover={{ pbackground: 'black', color: 'white' }}
                borderRadius={15}
                mb={5}
                key={section.name}
              >
                <Flex
                  flexDir="column"
                  borderRadius={'10px'}
                  key={section.id}
                  minH="82px"
                  bg="black"
                  minHeight={'95.18px'}
                  h="95.18px"
                  minW={'157.4px'}
                  w="157.4px"
                  m="26px"
                  bgImage={section.imgSrc ? section.imageSrc : bg}
                  bgSize="100%"
                  cursor="pointer"
                  backgroundRepeat="no-repeat"
                >
                  <Box h="100%">
                    <Flex >
                    {section.isFinished ?  <CheckIcon marginLeft={2} boxSize={8} color={'green.500'}/> : <></>}
                    {/* <CheckIcon marginLeft={2} boxSize={8} color={'green.500'}/> */}
                      <Text 
                        bg="black"
                        opacity="30%"
                        borderRadius="10px"
                        fontSize={15}
                      >
                        10:40
                      </Text>

                    </Flex>
                  </Box>

                  <Progress
                    alignSelf={'center'}
                    justifyContent={'center'}
                    mb={'20px'}
                    size={'sm'}
                    width={'85%'}
                    borderRadius={15}
                    colorScheme="cyan"
                    background={'#FFFFFF'}
                    value={50}
                  />
                </Flex>
                <Flex
                  bg={''}
                  alignSelf={'center'}
                  textColor={'#A8B3A8'}
                  _hover={{ color: 'white' }}
                  cursor="pointer"
                  textAlign="start"
                  w="70%"
                >
                  <Text justifySelf={'start'} fontSize={20} bg={'rd'} w={'90%'}>
                    {section.name}
                  </Text>
                  <Text justifyContent={'center'} fontSize={20} bg={''}>
                  {section.isFinished ?  <CheckIcon marginLeft={2} boxSize={8} color={'green.500'}/> : <></>}
                  </Text> 
                </Flex>
               
              </Flex>
            ))}
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default NextClass;
