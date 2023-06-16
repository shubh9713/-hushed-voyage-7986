import { Box, Flex, Grid, GridItem, Image, Spacer, Stack, Text,Button, grid, Center } from '@chakra-ui/react'
import React from 'react'
import Intro1 from "../Images/Intro1.jpg"
import image1 from "../Images/image1.jpg"



const IntroSection = () => {
  return (
    <div style={{fontFamily: "Montserrat, sans-serif"}}>
        <Flex margin="100px 0px 100px 50px">
            <Stack textAlign="left">
                {/* <p style={{fontWeight: "700", fontSize: "20px"}}>Brainsania - education in IT</p> */}
                <Box style={{fontWeight: "1000", fontSize: "55px"}}>
                    <Text _hover={{color: "#9d9b9e"}}>Where we</Text>
                    <Text _hover={{color: "#9d9b9e"}}>believe you</Text>
                    <Text _hover={{color: "#9d9b9e"}}>are a priority.</Text>
                </Box>
                <p style={{fontWeight: "500"}}>E_Learn is a Global training provider based <br /> across the UK thah specialises in accredited <br /> and bespoke training courses.</p>
                {/* <Grid
                    width="100%"
                    pt={50}
                    templateColumns='repeat(3, 1fr)'
                    gap={10}
                    fontWeight={500}
                >
                    <GridItem>
                        Long-term training programs, short intensive programs and an extensive knowledge base
                    </GridItem>
                    <GridItem>
                        Lectures, seminars, webinars, events, articles, videos and other formats
                    </GridItem>
                    <GridItem>
                        The largest community of IT professionals, experts, alumni and newcomers
                    </GridItem>
                </Grid> */}
             <Box style={grid} paddingTop={10} > 
             <input type="text" placeholder='Put your email here'/> <Button>Start Learning</Button>
             </Box>
                
            </Stack>
            <Spacer />
            <Image src={Intro1} alt='illustration-design' width="700px" marginRight={50}/>
        </Flex>

        <Flex margin="100px 0px 100px 50px">

            <Image src={image1} alt='image1'
            width={500}
            height={500}
            borderRadius="50%"
            />
            <Spacer/>
            <Stack textAlign="left" >
             <Box paddingLeft={200}>
                    <Text _hover={{color: "#9d9b9e"}} style={{fontWeight: "1000", fontSize: "40px"}}>What kind of Courses offer Learning Platform</Text>
                    <p>High Resolution Video is Video of Higher resolution Lorem <br /> ipsum dolor sit amet consectetur adipisicing elit. <br /> Ducimus id adipisci laudantium illo numquam facere unde perferendis aut in possimus.</p>
                    <Box padding={5,10,5,10}>
                    <Button>1500+ Courses</Button>
                    <Button>150+ Free Videos</Button>
                    </Box>
                    
                    <Box>
                    <Button>150K Free Lactures</Button>
                    <Button>Quality Teachers</Button>
                    </Box>
                    
                    
             </Box>
            </Stack>

        </Flex>
    </div>
  )
}

export default IntroSection