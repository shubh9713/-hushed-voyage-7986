import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Grid, GridItem, HStack, Heading, Image, Tag, Text, useToast } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContextProvider'

const SingleProgramePage = () => {

    const {user, addLearning} = useContext(AuthContext);
    console.log(user)
    const [program, setProgram] = useState({});
    const { id } = useParams();
    const toast = useToast();

    useEffect(() => {
        axios({
            url: `https://rich-ruby-bison-veil.cyclic.app/programs/${id}`,
            method: 'get'
        })
        .then((res) => {
            console.log(res.data);
            setProgram(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    useEffect(() => {
        axios({
            url: `https://rich-ruby-bison-veil.cyclic.app/users/${user.id}`,
            method: 'put',
            data : user
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [user]);


    function handleAdd(){
            let userLearning = user.learning;
            let courseExist = userLearning.find((course) => course.id === program.id);
    
            if(courseExist){
                toast({
                    title: `Program already added to Active Courses`,
                    status: 'error',
                    isClosable: true,
                })
            }
            else{
                addLearning(program);

                toast({
                    title: `Course is added to Active Courses`,
                    status: 'success',
                    isClosable: true,
                });
            }

    }

    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Navbar />
            <Flex direction="column">
                {/* <Box w="100%" bg="gray.100" mt={10} style={{ textAlign: "left", padding: "50px 50px" }}>
                    <Box w="60%">
                        <Box>
                            <Heading fontSize="6xl" style={{ fontFamily: "Montserrat, sans-serif" }}>{program.title}</Heading>
                        </Box>
                        <Box my={10}>
                            <p style={{ fontSize: "22px" }}>{program.description}</p>
                        </Box>
                        <Box my={10}>
                            <p><span style={{ fontWeight: "700" }}>Duration : </span> {program.duration}, 12 hours a week</p>
                            {
                                program.specialization ? (
                                    <p><span style={{ fontWeight: "700" }}>Specialization : </span>
                                        <Tag size="md" variant='solid' colorScheme='gray'>{program.specialization}</Tag>
                                    </p>
                                    
                                ) : (
                                    null
                                )
                            }
                            <p><span style={{ fontWeight: "700" }}>Price : </span> {program.Price}</p>
                        </Box>
                        <Box>

                        <Text fontSize="30px">Click below to buy the Course and Start Larning</Text>
                            <Tag variant='solid' colorScheme='blue' p={3}>
                                <Text fontSize="xl" onClick={handleAdd}>Start Learning</Text>
                            </Tag>
                        </Box>
                    </Box>
                </Box> */}

<Box w="100%" bg="gray.100" mt={10} textAlign="center" py={10}>
        <Box w="60%" margin="0 auto">
          <Box>
            <Heading fontSize="6xl" fontFamily="Montserrat, sans-serif">
              {program.title}
            </Heading>
          </Box>
          <Box my={10}>
            <p style={{ fontSize: "22px" }}>{program.description}</p>
          </Box>
          <Box my={10}>
            <p>
              <span style={{ fontWeight: "700" }}>Duration: </span>
              {program.duration}, 12 hours a week
            </p>
            {program.specialization && (
              <p>
                <span style={{ fontWeight: "700" }}>Specialization: </span>
                <Tag size="md" variant="solid" colorScheme="gray">
                  {program.specialization}
                </Tag>
              </p>
            )}
            <p>
              <span style={{ fontWeight: "700" }}>Price: </span>
              {program.Price}
            </p>
          </Box>
          <Box>
            <Text fontSize="30px">Click below to buy the Course and Start Learning</Text>
            <Tag
              variant="solid"
              colorScheme="blue"
              p={3}
              cursor="pointer"
              onClick={handleAdd}
              _hover={{ opacity: 0.8 }}
            >
              <Text fontSize="xl"> Start Your Learning</Text>
            </Tag>
          </Box>
        </Box>
      </Box>


                {/* ----------------------------- PROGRAM TEACHERS ---------------------------- */}
                <Flex bg="twitter.50">
                    <Box w="100%" style={{ textAlign: "left", padding: "50px 50px" }}>
                        <Heading size="xl" style={{ fontFamily: "Montserrat, sans-serif" }}><span style={{ color: "black" }}>The Curriculum Team</span></Heading>
                        <Box my={10}>
                            <p style={{ fontSize: "22px" }}>
                            With extensive industry experience, the Masai Curriculum Team is a group of expert instructors. All our instructors share 2 things in common, on-the-job learnings and a passion for teaching.
                            </p>
                        </Box>

                        <Flex gap={10}>
                            <Box style={{ backgroundColor: "white", width: "55%", padding: "20px 20px", borderRadius: "25px" }}>
                                    <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/image_47_a922f4522c.png' alt="Vivek M. Agrawal" style={{ width: "100%", borderRadius: "20%",  }} />
                                    <p style={{ fontWeight: "700", fontSize: "26px", textAlign:"center" }}>Vivek M. Agrawal</p>
                                
                                <Box my={5}>
                                    <p style={{ fontWeight: "600", textAlign:"center" }}>Director Curriculum:</p>
                                    <p style={{ fontWeight: "600", textAlign:"center" }}>Programming, Java Script</p>
                                </Box>
                            </Box>

                            <Box style={{ backgroundColor: "white", width: "55%", padding: "20px 20px", borderRadius: "25px" }}>
                                
                                    <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/abdul_45448bd4cc.jpeg' alt="Alexei Walker" style={{ width: "100%", borderRadius: "20%" }} />
                                    <p style={{ fontWeight: "700", fontSize: "26px", textAlign:"center" }}>Abdul Jabbar Peer</p>
                                
                                <Box my={5}>
                                    <p style={{ fontWeight: "600",textAlign:"center" }}>Program Instructor:</p>
                                    <p style={{ fontWeight: "600",textAlign:"center"}}>React JS</p>
                                </Box>
    
                            </Box>
                            <Box style={{ backgroundColor: "white", width: "60%", padding: "20px 20px", borderRadius: "25px" }}>
                                
                                    <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/varun_bhatt_60be6038a5.jpeg' alt="Murat Deniz" style={{ width: "100%", borderRadius: "20%", height:"280px" }} />
                                    <p style={{ fontWeight: "700", fontSize: "26px", textAlign:"center" }}>Varun Bhatt</p>
                    
                                <Box my={5}>
                                    <p style={{ fontWeight: "600",textAlign:"center" }}> Curriculum Lead</p>
                                    <p style={{ fontWeight: "600",textAlign:"center" }}>Programming, DSA</p>
                                </Box>
                                
                            </Box>
                            <Box style={{ backgroundColor: "white", width: "55%", padding: "20px 20px", borderRadius: "25px" }}>
                                
                                    <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg' alt="Sean Paul" style={{ width: "100%", borderRadius: "20%" }} />
                                    <p style={{ fontWeight: "700", fontSize: "26px",textAlign:"center" }}>Albert Sebastian</p>
                                
                                <Box my={5}>
                                    <p style={{ fontWeight: "700" ,textAlign:"center" }}>Director: Bussiness Head</p>
                                    <p style={{ fontWeight: "600" ,textAlign:"center" }}>Fundamentals of Programming</p>
                                </Box>
                            
                            </Box>
                        </Flex>
                    </Box>
                </Flex>


                {/* --------------------------- HIRING PARTNERS -------------------------- */}
                {/* <Flex direction="column">
                    <Box w="60%" style={{ textAlign: "left", padding: "50px 50px" }}>
                        <Heading style={{ fontFamily: "Montserrat, sans-serif" }}>Hiring Partners</Heading>
                        <Box my={10}>
                            <p style={{ fontSize: "24px" }}>The guarantee of employment is fixed in the contract. If after successful training you do not find a job, we will refund your money.</p>
                        </Box>
                        <Box mt={10}>
                            <p style={{ fontSize: "20px", fontWeight: "700" }}>Our graduates have been employed by:</p>
                        </Box>
                    </Box>
                    <Box w="90%" style={{ textAlign: "left", padding: "0px 50px 50px 50px" }} >
                        <Grid
                            w="100%"
                            templateColumns='repeat(5, 1fr)'
                        >
                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-geekbrains.svg" alt="logo-geekbrains" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-sberbank.svg" alt="logo-sberbank" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-vk.svg" alt="logo-vk" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-megafon.svg" alt="logo-megafon" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-tele2.svg" alt="logo-tele2" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-x5group.svg" alt="logo-x5group" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-raiffaisen.svg" alt="logo-raiffaisen" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-rostelecom.svg" alt="logo-rostelecom" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-alfa.svg" alt="logo-alfa" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-umb.png" alt="logo-umb" /></GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-oktkrytie.svg" alt="logo-oktkrytie" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-gazprom.svg" alt="logo-gazprom" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-nornik.png" alt="logo-nornik" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-paragon.svg" alt="logo-paragon" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-legion.svg" alt="logo-legion" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-wargaming.svg" alt="logo-wargaming" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/forsite.svg" alt="forsite" /></GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-oktkrytie.svg" alt="logo-oktkrytie" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-motify.svg" alt="logo-motify" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-litrec.svg" alt="logo-litrec" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-luxoft.svg" alt="logo-luxoft" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-epam.svg" alt="logo-epam" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-reconnect.svg" alt="logo-reconnect" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-psb.png" alt="logo-psb" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-magnit.png" alt="logo-magnit" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-mann.png" alt="logo-mann" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-rucenter.svg" alt="logo-rucenter" /></GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-youla.svg" alt="logo-youla" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-tkb.svg" alt="logo-tkb" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-krok.png" alt="logo-krok" />
                            </GridItem>

                            <GridItem>
                                <Image style={{ width: "200px", height: "100px" }} src="https://gb.ru/channels/base/images/company/logo-volks.png" alt="logo-volks" />
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex> */}

                {/* --------------------WHAT YOU'LL LEARN----------------------- */}
                

<Box w="100%" bg="#eff0f5" textAlign="center" py={10}>
      <Heading size="xl" fontFamily="Montserrat, sans-serif">
        Program Benefits
      </Heading>
      <Box my={10}>
        <p style={{ fontSize: "22px" }}>
          The program brings together the experience of leading experts and methodologists, fundamental and applied knowledge, and up-to-date technological tools. All this is presented in an accessible way - we know how to teach and know exactly what the path in the IT profession can be.
        </p>
      </Box>
      <Grid
        w="70%"
        templateColumns="repeat(2, 1fr)"
        gap={10}
        mx="auto"
        justifyContent="center"
      >
        <GridItem
          bg="white"
          p={6}
          borderRadius="25px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Flex direction="row" align="center" gap={4}>
            <Image src="https://gb.ru/channels/base/images/benefits/user_outgoing_outline_28.svg" alt="pb-1" boxSize="40px" />
            <Box>
              <Heading as="h3" fontSize="xl" fontWeight="bold">Smooth entry</Heading>
              <p>Suitable even for IT beginners</p>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg="white"
          p={6}
          borderRadius="25px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Flex direction="row" align="center" gap={4}>
            <Image src="https://gb.ru/channels/base/images/benefits/crown_outline_28.svg" alt="pb-2" boxSize="40px" />
            <Box>
              <Heading as="h3" fontSize="xl" fontWeight="bold">Career prospects</Heading>
              <p>Increase your value in the job market</p>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg="white"
          p={6}
          borderRadius="25px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Flex direction="row" align="center" gap={4}>
            <Image src="https://gb.ru/channels/base/images/benefits/key_outline_28.svg" alt="pb-3" boxSize="40px" />
            <Box>
              <Heading as="h3" fontSize="xl" fontWeight="bold">Universal Skills</Heading>
              <p>Learn not only the basics, but also advanced tools</p>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg="white"
          p={6}
          borderRadius="25px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Flex direction="row" align="center" gap={4}>
            <Image src="https://gb.ru/channels/base/images/benefits/education_outline_28.svg" alt="pb-4" boxSize="40px" />
            <Box>
              <Heading as="h3" fontSize="xl" fontWeight="bold">Learning by doing</Heading>
              <p>Solve over 50 practical problems</p>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg="white"
          p={6}
          borderRadius="25px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Flex direction="row" align="center" gap={4}>
            <Image src="https://gb.ru/channels/base/images/benefits/calendar_outline_28.svg" alt="pb-5" boxSize="40px" />
            <Box>
              <Heading as="h3" fontSize="xl" fontWeight="bold">Quick results</Heading>
              <p>Opportunity to find a job within 9 months after the start of training</p>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          bg="white"
          p={6}
          borderRadius="25px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Flex direction="row" align="center" gap={4}>
            <Image src="https://gb.ru/channels/base/images/benefits/speedometer_max_outline_28.svg" alt="pb-6" boxSize="40px" />
            <Box>
              <Heading as="h3" fontSize="xl" fontWeight="bold">Popular specializations</Heading>
              <p>Consciously choose your path</p>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>


                {/* ------------------------------ FAQs ---------------------------------- */}
                {/* <Box w="100%" style={{ textAlign: "left", padding: " 50px 50px 0px 50px" }}>
                    <Heading size="xl" style={{ fontFamily: "Montserrat, sans-serif" }}>Frequently Asked <span style={{ color: "slateblue" }}>Questions</span></Heading>
                    <Accordion allowToggle>
                        <Grid
                            w="70%"
                            margin="auto"
                            templateColumns='repeat(2, 1fr)'
                            gap={10}
                            mt={20}
                        >
                            <GridItem>
                                <AccordionItem bg="lavender" borderRadius="25px">
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Why should I take this program?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        During the course of the program, you will gain in-depth knowledge, choose specializations, learn technologies and tools, and in 9 months you will be able to find a job, get a promotion or promote your own projects. The acquired skills can be applied to solve corporate problems, team development, tasks of your own business or personal brand. As a result of the training, you will be able not only to work, but also to control the process of fulfilling the tasks of employees.
                                    </AccordionPanel>
                                </AccordionItem>
                            </GridItem>

                            <GridItem>
                                <AccordionItem bg="lavender" borderRadius="25px">
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                What if I have a problem or an urgent question?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        If you or your employees are students of paid courses and have questions related to the educational process, please contact us: sales@ brainsania.ru or 8-800-700-68-41 (toll-free). Support specialists, tutors and mentors will answer your questions along the way. For other questions, write to us at support@brainsania.ru.
                                    </AccordionPanel>
                                </AccordionItem>
                            </GridItem>

                            <GridItem>
                                <AccordionItem bg="lavender" borderRadius="25px">
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Do I need to pay for the entire tuition in one payment or is there an installment plan?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        We have provided several payment options. You can pay the entire amount at once, as well as choose installments for 6, 12, 18, 24 or 36 months. The cost of the program will increase step by step. Now is the best time to start.
                                    </AccordionPanel>
                                </AccordionItem>
                            </GridItem>

                            <GridItem>
                                <AccordionItem bg="lavender" borderRadius="25px">
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                What if I can't study online or miss a class?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        For those who could not attend the lesson on time, we record each lesson. Video recordings are always available in the "Training" section. Also, presentations and methodological materials are available for the lessons, with the help of which you can better prepare for the classes and gain additional knowledge. If you do miss a class, you can join another group's class and complete the assignments with them.
                                    </AccordionPanel>
                                </AccordionItem>
                            </GridItem>

                            <GridItem>
                                <AccordionItem bg="lavender" borderRadius="25px">
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                What is the training schedule? Can you combine it with work?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        On average, students of the program devote about 10 hours a week to lectures, studying additional materials and preparing homework. We calculated several training schemes that allow you to optimally distribute the recommended load. You will definitely be able to choose a study schedule that is convenient for you, integrate it into your usual way of life and combine it with work.
                                    </AccordionPanel>
                                </AccordionItem>
                            </GridItem>

                            <GridItem>
                                <AccordionItem bg="lavender" borderRadius="25px">
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                If I already work in this specialty, will this program be useful for me?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        The program is filled with expert materials and practice. In addition to lectures, you will have access to tests to test your knowledge and practical tasks with the opportunity to receive comments and recommendations from experts. Such a study will allow you to hone your Hard Skills even more accurately. In addition, the program provides for the collection of a professional portfolio, in the process of creating which you will not only get your hands on new projects, but will also be able to present your own candidacy on the labor market even better.
                                    </AccordionPanel>
                                </AccordionItem>
                            </GridItem>
                        </Grid>
                    </Accordion>
                </Box> */}


                {/* ---------------------------- FOOTER -------------------------------- */}
                <Footer />
            </Flex>
        </div>
    )
}

export default SingleProgramePage