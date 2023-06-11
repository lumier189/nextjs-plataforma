import Data from '@/shared/components/Data';
import HeaderNavBar from '@/shared/components/HeaderNavBar';
import NextClass from '@/shared/components/NextClass';
import VideoPlayer from '@/shared/components/VideoPlayer';
import {
    Flex,
  } from '@chakra-ui/react';
  import { useState } from 'react';

  
  export default function Home() {
  
    const [sections, setSections] = useState([
      {
        id: 0,
        name: '',
        classId: 0,
        videoProgress: null,  
        imgSrc:'',
        videoSrc: '',
        videoName: '',
      },
    ]);
  
  
    const [isPlaying, setPlaying] = useState(Data[0]);
    
  // request para pegar o array de sections
    const getSection = (id: string) => {
      return setSections(Data);
    };
  
    // função que recebe o id do modulo e faz a requisição para pegar o array de sections
    const handleChangeCurrentSection = (id: string) => {
      return getSection(id);
    };
  
  
    // recebe o id do video do nextClass e seta o state do video
    const handleVideo = (data: any) => {
      return setPlaying(data);
    };
  
    return (
      <HeaderNavBar
      handleChangeCurrentSection={handleChangeCurrentSection}
      >
        <Flex
          color="white"
          maxH="60vh"
          marginTop="10vh"
          mr="50px"
          ml="50px"
        >
          <VideoPlayer data={isPlaying}/>
          <NextClass handleVideo={handleVideo} kkk={sections}/>
  
        </Flex>
      </HeaderNavBar>
    );
  }