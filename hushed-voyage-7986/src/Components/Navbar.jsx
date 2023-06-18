import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import Logo from "../Images/Logo.png"

const Navbar = () => {
  const { isAuth, user, logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, position: 'sticky', top: 0, zIndex: 999 , backgroundColor: "white"}}>
      <Flex minWidth="max-content" alignItems="center" gap="7" px={5} paddingBottom="10px" paddingTop="10px">
        <HStack>
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
        <Popover>
          <PopoverTrigger>
            <Button
              variant="ghost"
              colorScheme="gray"
              p={0}
              _hover={{ backgroundColor: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
              onClick={onOpen}
            >
              <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
                Courses
              </Text>
              <ChevronDownIcon w={6} h={6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent bg="white" shadow="lg" zIndex={999}>
            <PopoverArrow />
            <Stack spacing="24px" p={4}>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/ittraining">Information & Technology</Link>
              </Text>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/programming">Coading And Programming</Link>
              </Text>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/programming">Web Designing</Link>
              </Text>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/ittraining">Testing And Analysing</Link>
              </Text>
              
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/ittraining">Machine Learning</Link>
              </Text>
              
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>App Designing</Text>
            </Stack>
          </PopoverContent>
        </Popover>
        <Spacer />
        {isAuth ? (
          <HStack>
            <Text>Hi, {user.name}</Text>
            <Spacer />
            <Button
              colorScheme="gray"
              _hover={{ backgroundColor: 'black', color: 'white' }}
              onClick={logout}
            >
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
