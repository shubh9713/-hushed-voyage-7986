import { Box, Flex, Grid, Image, Spacer, Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Intro1 from "../Images/Intro1.jpg";
import image1 from "../Images/image1.jpg";
import GroupStudy from "../Images/GroupStudy.jpg";
import OnlineClasses from "../Images/OnlineClasses.jpg";

const IntroSection = () => {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Flex margin="50px 50px 50px 50px" bg="#40E0D0" borderRadius="20px" p="50px">
        <Stack textAlign="left" spacing={5} color="white">
          <Box style={{ fontWeight: "bold", fontSize: "50px" }}>
            <Text _hover={{ color: "#9d9b9e" }}>Where we</Text>
            <Text _hover={{ color: "#9d9b9e" }}>believe you</Text>
            <Text _hover={{ color: "#9d9b9e" }}>are a priority.</Text>
          </Box>
          <p style={{ fontWeight: "500" }}>
            E_Learn is a global training provider based in the UK that specializes in accredited and bespoke training courses.
          </p>
          <Stack direction="row" spacing={3}>
            <input type="text" placeholder='Put your email here' style={{ padding: "10px", borderRadius: "5px", border: "none" }} />
            <Button colorScheme="teal" variant="solid" borderRadius="5px">Start Learning</Button>
          </Stack>
        </Stack>
        <Spacer />
        <Image src={GroupStudy} alt='illustration-design' width="500px" borderRadius="20px" />
      </Flex>

      <Flex margin="100px 0px 100px 50px">
        <Image src={OnlineClasses} alt='image1' width={600} height={400} borderRadius="20px" />
        <Spacer />
        <Stack textAlign="left">
          <Box paddingLeft={10}>
            <Text style={{ fontWeight: "bold", fontSize: "30px" }}>What kind of courses does our Learning Platform offer?</Text>
            <p style={{ fontSize: "18px" }}>
              Our Learning Platform provides a wide range of courses and resources for your educational journey. With us, you can access:
            </p>
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={5}>
              <Box>
                <Button colorScheme="teal" variant="solid">1500+ Courses</Button>
              </Box>
              <Box>
                <Button colorScheme="teal" variant="solid">150+ Free Videos</Button>
              </Box>
              <Box>
                <Button colorScheme="teal" variant="solid">150K Free Lectures</Button>
              </Box>
              <Box>
                <Button colorScheme="teal" variant="solid">Quality Teachers</Button>
              </Box>
            </Grid>
          </Box>
        </Stack>
      </Flex>
    </div>
  )
}

export default IntroSection;
