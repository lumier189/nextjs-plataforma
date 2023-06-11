import { Box, Divider, Flex } from '@chakra-ui/react';
import NextClass from './components/NextClass';
import VideoPlayer from './components/VideoPlayer';
import HeaderNavBar from './components/HeaderNavBar';
import { CoursesProvider } from '../../shared/hooks/courses.hook';

export default function FullCycle() {
  return (
    <>
      <CoursesProvider>
        <HeaderNavBar />
        <Divider color={'rgba(255, 255, 255, 0.2)'} />
        <Flex          
          overflow={'hidden'}
          marginTop="20px"
          mr="87.27px"
          ml="87.27px"
          justifyContent={'space-evenly'}
        >
          <VideoPlayer />
          <NextClass />
        </Flex>
      </CoursesProvider>
    </>
  );
}
