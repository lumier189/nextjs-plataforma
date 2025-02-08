import {
  Text,
  Box,
  Card,
  CardBody,
  Flex,
  Progress,
  SimpleGrid,
} from '@chakra-ui/react';
import { useCourses } from '../../../shared/hooks/courses.hook';
import { CheckIcon } from '@chakra-ui/icons';

function NextClass() {
  const { currentClass, handleChangeVideo, isPlaying } = useCourses();
  const convertSecondsInMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const Remainingseconds = seconds % 60;

    var formmatedMinutes = minutes < 10 ? '0' + minutes : minutes;
    var formmatedSeconds =
      Remainingseconds < 10
        ? '0' + Remainingseconds
        : Remainingseconds;

    return `${formmatedMinutes}:${formmatedSeconds}`;
  };
  const bg = '/assets/background.png';
  return (
    <Flex
      width={['100%', '35%']}
      h={['30%', '10%']}
      background={'whiteAlpha.50'}
      marginTop={'46px'}
      borderRadius={'20px'}
      border-radius="20px"
      overflowY={['hidden', 'auto']}
      overflowX={['auto', 'hidden']}
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
      <Flex flexDirection={['row', 'column']} maxH={'650px'}>
        {currentClass &&
          currentClass?.sections?.map((section: any) => (
            <Flex
              flexDirection={['column', 'row']}
              onClick={() => handleChangeVideo(section.id)}
              _hover={{ background: '#062638', color: 'white' }}
              borderRadius={15}
              mb={5}
              key={section.name}
            >
              <Flex
                flexDir="column"
                borderRadius={'10px'}
                key={section.id}
                minH="82px"
                h="92px.18px"
                minHeight={'95.18px'}
                bg="black"
                minW={'157.4px'}
                w="157.4px"
                m="26px"
                bgImage={
                  section.video.thumbnailPath
                    ? section.video.thumbnailPath
                    : bg
                }
                bgSize="110%"
                cursor="pointer"
                backgroundRepeat="no-repeat"
              >
                <Box h="100%">
                  <Flex>
                    {section.isFinished ? (
                      <CheckIcon
                        marginLeft={2}
                        boxSize={8}
                        color={'green.500'}
                      />
                    ) : (
                      <></>
                    )}
                    {/* <CheckIcon marginLeft={2} boxSize={8} color={'green.500'}/> */}
                    <Text
                      bg="black"
                      opacity="50%"
                      borderRadius="10px"
                      textColor={'white'}
                      fontSize={15}
                    >
                      {convertSecondsInMinutes(
                        section?.video?.duration
                      )}                      
                    </Text>
                  </Flex>
                </Box>
                {!!section.progress.progress && (
                  <Progress
                    alignSelf={'center'}
                    justifyContent={'center'}
                    mb={'20px'}
                    size={'sm'}
                    width={'85%'}
                    borderRadius={15}
                    colorScheme="cyan"
                    background={'#FFFFFF'}
                    value={section.progress.progress}
                  />
                )}
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
                <Text
                  justifySelf={'start'}
                  fontSize={20}
                  bg={'rd'}
                  w={'90%'}
                >
                  {section.name}
                </Text>
                <Text justifyContent={'center'} fontSize={20} bg={''}>
                  {section.isFinished ? (
                    <CheckIcon
                      marginLeft={2}
                      boxSize={8}
                      color={'green.500'}
                    />
                  ) : (
                    <></>
                  )}
                </Text>
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}

export default NextClass;
