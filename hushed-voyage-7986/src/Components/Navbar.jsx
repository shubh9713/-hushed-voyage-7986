import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
// import { ArrowDownIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';


const Navbar = () => {

    const {isAuth, user, logout} = useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div style={{fontFamily: "Montserrat, sans-serif"}}>
            <Flex minWidth='max-content' alignItems='center' gap='7' px={5} paddingBottom={50}>
                <HStack>
                    {/* <Button colorScheme='gray' onClick={onOpen}>
                        <ChevronDownIcon/>
                    </Button> */}
                    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                            <DrawerHeader fontSize="3xl" borderBottomWidth='1px' fontFamily="Montserrat, sans-serif">Programs</DrawerHeader>
                            <DrawerBody style={{fontFamily: "Montserrat, sans-serif"}}>
                                <Stack spacing="24px">
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Information Technology
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/programming'>
                                            Programming
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Analytics
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Testing
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Product and Projects
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            IT Architecture
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Blockchain</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Marketing</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/design'>
                                            Design
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Games</Text>
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <Link to='/'>
                        <Image src="https://document-export.canva.com/tHyUU/DAFls6tHyUU/8/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230615%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230615T102857Z&X-Amz-Expires=12972&X-Amz-Signature=b33d72986d4004d7bc7f0f0b2fcd755e9f960b237ef495c1415cc4363d71a433&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2015%20Jun%202023%2014%3A05%3A09%20GMT" alt='geek-brains-logo' width={200} />
                    </Link>
                </HStack>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}  onClick={onOpen}>Home</Text>
                {
                    isAuth ? (
                        <Link to={`/users/${user.id}`}>
                            <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>My Learning</Text>
                        </Link>
                    ) : (
                        null
                    )
                }
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>About Us</Text>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Members</Text>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Pricing</Text>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Features 
                <Button colorScheme='gray' onClick={onOpen}>
                <ChevronDownIcon/>
                </Button>
                </Text>
                
                <Spacer />
                {
                    isAuth ? (
                        <HStack>
                            <Text>Hi, {user.name}</Text>
                            <Spacer />
                            <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}} onClick={logout}>                
                                Logout
                            </Button>
                        </HStack>
                    ) : (
                        <HStack>
                            <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}}>
                                <Link to="/SignIn" style={{textDecoration: "none"}}>
                                    SignIn
                                </Link>
                            </Button>
                            <Spacer />
                            <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}}>
                                <Link to="/SignUp" style={{textDecoration: "none"}}>
                                    SignUp
                                </Link>
                            </Button>
                        </HStack>
                    )
                }
            </Flex>
        </div>
    )
}

export default Navbar