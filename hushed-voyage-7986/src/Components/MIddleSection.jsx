import { Box, Center, Grid, GridItem, HStack, Heading, Image, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image1 from "../Images/image1.jpg"


const MiddleSection = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <Stack style={{width:"90%", margin:"auto"}} spacing="40px">
        <Box style={{ textAlign: "center" }}>
  <Heading size="3xl">Our Students are <Text as="span" color="#40E0D0" borderBottom="2px solid #40E0D0">Creating Impact</Text></Heading>
</Box>

           
            <Grid
  marginTop={50}
  templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
  gap={20}
>
  <GridItem>
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      textAlign="center"
    >
      <Image src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600" alt="student-1" style={{ width: "100%", height: "200px" }} />
      <Text fontWeight="700" mt={4}>Gustavo Fringe</Text>
      <Text>SDE-1, Swiggy</Text>
      <Text>I liked that every thing is taught in a structured manner, and there is no spoon feeding. That helps us learn by ourself when we do.
</Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      textAlign="center"
    >
      <Image src= "https://images.pexels.com/photos/6322920/pexels-photo-6322920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="student-2" style={{ width: "100%", height: "200px" }} />
      <Text fontWeight="700" mt={4}>john Poul Duahan</Text>
      <Text>SDE-2, PhonePe</Text>
      <Text>I developed Communication Skills, People Skills, Mindset, active patience, JAVA, DSA, JavaScript, CSS, and HTML.</Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      textAlign="center"
    >
      <Image src="https://images.pexels.com/photos/3875675/pexels-photo-3875675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="student-3" style={{ width: "100%", height: "200px" }} />
      <Text fontWeight="700" mt={4}>John Dee</Text>
      <Text>SDE-1, Dream-11.</Text>
      <Text>I learnt a lot from E_Learn i.e discipline, time management, Coading, Effective Communication and professionalism.</Text>
    </Box>
  </GridItem>
</Grid>

            </Stack>
    </div>
  )
}

export default MiddleSection