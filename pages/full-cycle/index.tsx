import { Box, Divider, Flex } from '@chakra-ui/react';
import NextClass from './components/NextClass';
import VideoPlayer from './components/VideoPlayer';
import HeaderNavBar from './components/HeaderNavBar';
import { CoursesProvider, useCourses } from '../../shared/hooks/courses.hook';

export default function FullCycle() {
    const { currentClass, handleChangeVideo, isPlaying } = useCourses();
    
  

  return (
    <>
      <CoursesProvider>
        <HeaderNavBar  />
        <Divider color={'rgba(255, 255, 255, 0.2)'} />
        <Flex
          flexDirection={['column', 'row']}
          overflow={'hidden'}
          marginTop={['20px']}
          mr={["0px","87.27px"]}
          ml={["0px","87.27px"]}
        >
          <VideoPlayer />
          <NextClass />
        </Flex>
      </CoursesProvider>
    </>
  );
}
