import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MachineLearning from "../Images/MachineLearning.jpg"
import Gaming from "../Images/Gaming.jpg"
import JavaScript from "../Images/JavaScript.jpg"
import OnlineMarketing from "../Images/OnlineMarketing.jpg"
import Design from "../Images/Design.jpg"

const Directions = () => {
  return (
    <div>
      {/* ------------------------------------------ FIRST SECTION ---------------------------------------- */}
      <Stack style={{ textAlign: "Center", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px" }}>
        <Heading fontSize="5xl">We Bring The Good Education To Life</Heading>
    
        <Text style={{ fontSize: "21px" }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo impedit cumque fuga eaque, qui ab eveniet molestias ex quidem.
        </Text>
      </Stack>
      <Grid
  width="90%"
  margin="auto"
  marginTop={50}
  paddingLeft={10}
  paddingTop={10}
  paddingRight={10}
  paddingBottom={10}
  borderRadius={25}
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  bgColor="#40E0D0"
  gap={10}
>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src={MachineLearning}
        alt='programming'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Machine Learning
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src={Gaming}
        alt='design'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Game Development
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src={JavaScript}
        alt='marketing'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Java Script
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src={OnlineMarketing}
        alt='control'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Online Marketing
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/analytics.jpeg"
        alt='analytics'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Analytics
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src={Design}
        alt='hi-tech'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Designing
      </Text>
    </Box>
  </GridItem>
</Grid>



      {/* ------------------------------------------ SECOND SECTION ---------------------------------------- */}
      {/* <Stack style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px", marginTop: "100px"}}>
        <Heading fontSize="5xl">Assemble your training programs in 4 steps</Heading>
        <Text style={{ fontSize: "21px" }}>The constructor includes dozens of parameters that will make learning as convinient as possible for you</Text>
      </Stack> */}
      {/* <Grid
       width="90%"
       margin="auto"
       marginTop={50}
       templateColumns='repeat(3, 1fr)'
       gap={10}
       fontFamily="Montserrat, sans-serif"
      > */}
        {/* <GridItem bg="#b160eb"  style={{borderRadius:"35px", padding: "20px 30px"}}>
          <Stack textAlign="left" color="whiteAlpha.800">
            <p>Training program</p>
            <p style={{fontSize: "40px",  fontWeight:"700"}}>Information Technology</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Analytics</p>
              <p>Testing</p>
              <p>Product Management in IT</p>
              <p>Project Management in IT</p>
              <p>Programming</p>
              <p>Architecture</p>
            </Box>
            <Link to='/ittraining'>
              <Center p="15px 0px">
                  <Button width="60%" fontSize="18px" bg="black" padding="25px 0px" _hover={{color: "black", backgroundColor: "whiteAlpha.800"}} rightIcon={<ChevronRightIcon />}>To the program</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

        <GridItem bg="#2ce629"  style={{borderRadius:"35px", padding: "20px 30px"}}>
          <Stack textAlign="left" color="blackAlpha.800">
            <p>Training program</p>
            <p style={{fontSize: "40px",  fontWeight:"700"}}>Marketing</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Internet marketing</p>
              <p>Product marketing</p>
              <p>Brand management</p>
            </Box>
            <Link to='/ittraining'>
              <Center p="15px 0px">
                  <Button width="60%" fontSize="18px" bg="black" color="whiteAlpha.800" _hover={{color: "black", backgroundColor: "whiteAlpha.800"}} mt={170} padding="25px 0px" rightIcon={<ChevronRightIcon />}>To the program</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

        <GridItem bg="#ede215"  style={{borderRadius:"35px", padding: "20px 30px"}}>
          <Stack textAlign="left" color="blackAlpha.800">
            <p>Training program</p>
            <p style={{fontSize: "40px",  fontWeight:"700"}}>Design</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Environment design</p>
              <p>Graphic design</p>
              <p>Object design</p>
              <p>Digital design</p>
            </Box>
            <Link to='/design'>
              <Center p="15px 0px">
                  <Button width="60%" fontSize="18px" bg="black" color="whiteAlpha.800" _hover={{color: "black", backgroundColor: "whiteAlpha.800"}} mt={135} padding="25px 0px" rightIcon={<ChevronRightIcon />}>To the program</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem> */}

      {/* </Grid> */}
    </div>
  )
}

export default Directions