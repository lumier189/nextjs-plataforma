import { Box, Divider, Flex } from '@chakra-ui/react';
import NextClass from './NextClass';
import VideoPlayer from './VideoPlayer';
import HeaderNavBar from './HeaderNavBar';
import { CoursesProvider } from '../hooks/courses.hook';

export default function Home() {
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
