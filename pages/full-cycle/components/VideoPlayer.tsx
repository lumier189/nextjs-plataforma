import { Box, Flex, Text, Heading, AspectRatio } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useCourses } from '../../../shared/hooks/courses.hook';

const VideoPlayer = () => {
  const { isPlaying, currentClass } = useCourses();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Box minW={['60%', '65%']} height={['70%', '80%']} marginRight={['0px', '10px']}>
      <Flex flexDirection="column">
        {/* Class Info */}
        <Box>
          {currentClass?.module ? (
            <Text textColor="#666666" fontWeight={500} fontSize="19.4px">
              {`${currentClass?.module} - ${currentClass?.name} - ${isPlaying?.name}`}
            </Text>
          ) : (
            <Text textColor="#666666" fontWeight={500} fontSize="19.4px">
              Escolha um Módulo
            </Text>
          )}
        </Box>

        {/* Video Player (Maintaining Rounded Borders) */}
        <Box
          borderColor="white"
          borderWidth={['0px', '3px']}
          borderRadius="20px"
          marginTop="20px"
          overflow="hidden" // Ensures rounded corners apply properly
        >
          <AspectRatio ratio={16 / 9} width="100%">
            <video
              ref={videoRef}
              controls
              src={isPlaying?.path}
              poster={isPlaying?.thumbnailPath}
              style={{ width: '100%', height: '100%', borderRadius: '20px' }} // Keeps corners rounded
            />
          </AspectRatio>
        </Box>

        {/* Video Description */}
        <Box padding={['10px', '0px']} flexDirection="column">
          <Heading mt="15px" textColor="#666666" fontSize={['16px', '26px']}>
            {isPlaying?.name}
          </Heading>
          <Text mt="15px" textColor="#666666">
            Aqui tem uma frase muito importante sobre o conteúdo que você está assistindo.
            Realmente muito importante, não deixe de ler.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoPlayer;
