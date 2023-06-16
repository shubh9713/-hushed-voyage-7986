import { Box, Center, Grid, GridItem, HStack, Heading, Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';


const MiddleSection = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <Stack style={{width:"90%", margin:"auto"}} spacing="40px">
            <Box style={{textAlign: "left"}}>
                <Heading size="3xl">Success stories of our students</Heading>
                <Heading size="3xl" color="#9d9b9e">that we are proud of</Heading>
            </Box>
            <Grid
                h='200px'
                marginTop={50}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={20}
            >
                <GridItem rowSpan={2} colSpan={2}>
                    <Center>
                        <Image src={image4} alt='student-3' style={{width: "90%", height: "300px", }}/>
                    </Center>
                    <p style={{fontWeight: "700"}}>“I found my first job already in the second month of studying at GB”</p>
                    <p>Katerina Lychak, 38 years old, tells. Faculty of Internet Marketing.</p>
                </GridItem>
                <GridItem colSpan={2}>
                    <HStack>
                        <Box style={{textAlign: "left"}}>
                            <p style={{fontWeight: "700"}}>“I got something on my phone that I made myself”</p>
                            <p>Georgy Valiev - how to learn to become an Android developer from scratch in just a year and get an offer from Umbrella IT before completing the course</p>
                        </Box>
                        <Image src={image2} alt="student-1" style={{width: "200px", height: "150px"}}/>
                    </HStack>
                </GridItem>
                <GridItem colSpan={2}>
                    <HStack>
                        <Box style={{textAlign: "left"}}>
                            <p style={{fontWeight: "700"}}>“I got something on my phone that I made myself”</p>
                            <p>Vsevolod Nekrasov, a graduate of the Faculty of Product Management, talks about hackathons, mentoring and the experience of creating a working IT product as part of his studies</p>
                        </Box>
                        <Image src={image3} alt="student-2" style={{width: "200px", height: "150px"}}/>
                    </HStack>
                </GridItem>
            </Grid>
            </Stack>
    </div>
  )
}

export default MiddleSection