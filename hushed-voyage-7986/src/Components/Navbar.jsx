import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import Logo from "../Images/Logo.png"

const Navbar = () => {
  const { isAuth, user, logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0 }}>
      <Flex minWidth="max-content" alignItems="center" gap="7" px={5} paddingBottom={50}>
        <HStack>
          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontSize="3xl" borderBottomWidth="1px" fontFamily="Montserrat, sans-serif">
                Programs
              </DrawerHeader>
              <DrawerBody style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Stack spacing="24px">
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/ittraining">Information Technology</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/programming">Programming</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/ittraining">Analytics</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/ittraining">Testing</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/ittraining">Product and Projects</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/ittraining">IT Architecture</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>Blockchain</Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>Marketing</Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                    <Link to="/design">Design</Link>
                  </Text>
                  <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>Games</Text>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Link to="/">
            <Image
              src={Logo}
              alt="geek-brains-logo"
              width={120}
              height="70px"
            />
          </Link>
        </HStack>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Home
          </Link>
        </Text>
        {isAuth ? (
          <Link to={`/users/${user.id}`}>
            <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
              Active Courses
            </Text>
          </Link>
        ) : null}
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          About Us
        </Text>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          Mentors
        </Text>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          Pricing
        </Text>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          Features
          <Button colorScheme="gray" onClick={onOpen}>
            <ChevronDownIcon />
          </Button>
        </Text>
        <Spacer />
        {isAuth ? (
          <HStack>
            <Text>Hi, {user.name}</Text>
            <Spacer />
            <Button colorScheme="gray" _hover={{ backgroundColor: 'black', color: 'white' }} onClick={logout}>
              Logout
            </Button>
          </HStack>
        ) : (
          <HStack>
            <Button colorScheme="gray" _hover={{ backgroundColor: 'black', color: 'white' }}>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                SignIn
              </Link>
            </Button>
            <Spacer />
            <Button colorScheme="gray" _hover={{ backgroundColor: 'black', color: 'white' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                SignUp
              </Link>
            </Button>
          </HStack>
        )}
      </Flex>
    </div>
  );
};

export default Navbar;
