import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useCourses } from '../../../shared/hooks/courses.hook';

const VideoPlayer = () => {
  const { isPlaying, currentClass } = useCourses();

  const videoRef = useRef<HTMLVideoElement>(null);
  function showTime() {}

  // const handleVideoEnd = async () => {
  // };

  // const [currentTime, setCurrentTime] = useState<number>(0);

  // useEffect(() => {
  //   const storedTime = localStorage.getItem(`videoTime_${data?.videoId}`);
  //   if (storedTime) {
  //     setCurrentTime(parseFloat(storedTime));
  //     videoRef.current && (videoRef.current.currentTime = parseFloat(storedTime));
  //   }
  // }, [data?.videoId]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     videoRef.current && setCurrentTime(videoRef.current.currentTime);
  //     localStorage.setItem(`videoTime_${data?.videoId}`, currentTime.toString());
  //     // Modifica o nome da chave no localStorage para incluir o videoId
  //   }, 15000);

  //   return () => clearInterval(intervalId);
  // }, [currentTime, data?.videoId]);

  // const handleTimeUpdate = () => {
  //   const time = videoRef.current?.currentTime || 0;
  //   setCurrentTime(time);
  //   localStorage.setItem(`videoTime_${data.videoId}`, time.toString());
  //   // Modifica o nome da chave no localStorage para incluir o videoId
  // };

  return (
    <Box minW={['60%', '65%']} height={['70%', '80%']} marginRight={['0px','10px']} >
      <Flex flexDirection={'column'}>
        <Box>
          {currentClass?.module ? (
            <Text
              textColor={'#666666'}
              fontWeight={500}
              fontSize={'19.4px'}
            >
              {`${currentClass?.module} - `}
              {`${currentClass?.name} - `}
              {isPlaying?.name}
            </Text>
          ) : (
            <Text
              textColor={'#666666'}
              fontWeight={500}
              fontSize={'19.4px'}
            >
              {' '}
              Escolha um Módulos
            </Text>
          )}
          {/* <Text
            textColor={'#666666'}
            fontWeight={500}
            fontSize={'19.4px'}
          >
            {`${currentClass?.module} - `}
            {`${currentClass?.name} - `}
            {isPlaying?.name}
          </Text> */}
        </Box>
        <Box
          borderColor={'white'}
          borderWidth={['0px','3px']}
          borderRadius={'20px'}
          marginTop={'20px'}
          // maxW="1170"
          // maxH={'588'}
          ref={videoRef}
          as="video"
          controls
          src={isPlaying?.path}
          poster={isPlaying?.thumbnailPath}
          objectFit="contain"
        ></Box>
        <Box padding={['10px','0px']} flexDirection={'column'}>
          <Heading mt={'15px'} textColor={'#666666'} fontSize={['16px','26px']}>
           {isPlaying?.name}
          </Heading>
          <Text mt={'15px'} textColor={'#666666'}>
            Aqui tem uma frase muito importante sobre o contéudo que você está assistindo.
            Realmente muito importante, não deixe de ler.

          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoPlayer;
