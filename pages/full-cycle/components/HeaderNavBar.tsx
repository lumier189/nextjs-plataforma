import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Text,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  Heading,
  ListItem,
  List,
  CircularProgress,
  CircularProgressLabel,
  Square,
  AccordionPanel,
  Icon,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import React from 'react';
import { useCourses } from '../../../shared/hooks/courses.hook';
import { useAuth } from '../../../shared/hooks/auth.hook';
import { useRouter } from 'next/router';

export default function HeaderNavBar() {
  const { handleChangeCurrentClass } = useCourses();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { modules } = useCourses();
  const { handleSignOut } = useAuth();
  const router = useRouter();

  return (
    <>
      <Box  w={["50%", "100%"]} px={4} height={102}>
        <Flex
          minH={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          {/* <Icon
                height={'100px'}
                as={TriangleDownIcon}
            ref={btnRef}
            
                backdropBlur={'none'}
                color={'rgba(13, 168, 255, 1)'}
                onClick={() => router.push('/')}
                transform={'rotate(90deg)'}
              />{' '} */}
          <Flex marginLeft={[0,69]}>
            <Button
              marginTop={'2px'}
              textColor={'#666666'}
              ref={btnRef as unknown as React.RefObject<HTMLButtonElement>}
              onClick={onOpen}
              background={'black'} 
              // hover={'none'}
            >
              <Text
                textColor={'#666666'}
                fontSize={['22px','30px']}
                fontWeight={700}
              >
                Módulos
              </Text>
            </Button>
            <Text
              textColor={'#666666'}
              fontSize={['22px','30px']}
              fontWeight={700}
            >
              Pautaforma - Full Cycle
            </Text>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  marginRight={70}
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'md'}
                    src={
                      'https://avatars.dicebear.com/api/male/username.svg'
                    }
                  />
                </MenuButton>

                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        'https://avatars.dicebear.com/api/male/username.svg'
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Button onClick={() => handleSignOut()}>
                      {' '}
                      Logout{' '}
                    </Button>
                  </MenuItem>
                  {/* <MenuItem>Account Settings</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        <Drawer
          size="sm"
          placement="left"
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef as unknown as React.RefObject<HTMLButtonElement>}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor={'#121214'}>
            <DrawerCloseButton />
            <DrawerHeader textColor="white">Módulos</DrawerHeader>
            <DrawerBody placeContent="center">
              <Accordion allowToggle>
                {modules &&
                  modules?.map((module) => (
                    <AccordionItem key={module.id}>
                      <Heading>
                        <AccordionButton>
                          <Flex
                            justifyContent="space-between"
                            as="span"
                            flex="1"
                            textAlign="left"
                          >
                            <Text
                              textColor="#A8B3A8"
                              _hover={{ color: 'white' }}
                              alignSelf="start"
                              fontSize={14}
                            >
                              {module.name}
                            </Text>
                            <Text
                              textColor={
                                module.progress.isFinished
                                  ? 'yellow.500'
                                  : '#A8B3A8'
                              }
                              alignSelf="end"
                              fontSize={14}
                              mr={4}
                            >
                              {module?.progress.progress}
                            </Text>
                          </Flex>
                          <AccordionIcon color={'#A8B3A8'} />
                        </AccordionButton>
                      </Heading>

                      <AccordionPanel ml={0} mr={0} pb={4}>
                        {module.classes &&
                          module.classes.map((lesson) => (
                            <List
                              key={lesson.id}
                              spacing={3}
                              textColor="#A8B3A8"
                            >
                              <ListItem
                                onClick={() =>
                                  handleChangeCurrentClass({
                                    id: lesson.id,
                                    name: lesson.name,
                                    module: module.name,
                                  })
                                }
                                mb={4}
                                cursor="pointer"
                                // textColor={
                                //   section.isFinished
                                //     ? '#61D361'
                                //     : 'grey'
                                // }
                                _hover={{ color: 'white' }}
                              >
                                <Flex
                                  _hover={{
                                    border: '1px',
                                    borderColor: '#0078D4',
                                  }}
                                >
                                  <Square
                                    bg="black"
                                    borderRadius={5}
                                    border="1px"
                                    borderColor="gray.700"
                                    padding={2}
                                  >
                                    <CircularProgress
                                      value={lesson.progress.progress}
                                      trackColor="grey"
                                      thickness="12px"
                                      _hover={{
                                        trackColor: 'red',
                                        color: 'white',
                                      }}
                                    >
                                      <CircularProgressLabel>
                                        {`${lesson.progress.progress}%`}
                                      </CircularProgressLabel>
                                    </CircularProgress>
                                  </Square>

                                  <Flex
                                    borderRadius="8px"
                                    justifyContent="space-between"
                                    pl={4}
                                    w="full"
                                    background="rgb(32, 32, 36)"
                                  >
                                    <Text alignSelf="center">
                                      {lesson.name}
                                    </Text>
                                    {/* <Box pr={2}>
                                            <Text color="grey">
                                              {lesson.name}
                                            </Text>
                                          </Box> */}
                                  </Flex>
                                </Flex>
                              </ListItem>
                            </List>
                          ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
              </Accordion>
            </DrawerBody>
            <DrawerFooter>
              <Text
                cursor="pointer"
                colorScheme="gray"
                _hover={{ color: 'blue.500' }}
              >
                Meu texto
              </Text>
              drawer footer se precisar
            </DrawerFooter>
          </DrawerContent>
        </Drawer>{' '}
        {/* <SideNavBar isMenuOpen={isMenuOpen} onOpen={onOpen} /> */}
      </Box>
    </>
  );
}
