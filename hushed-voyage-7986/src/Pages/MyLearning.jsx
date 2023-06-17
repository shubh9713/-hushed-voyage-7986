import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Box, Grid, GridItem, Heading, Progress, Textarea } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import { AuthContext } from '../Context/AuthContextProvider'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const MyLearning = () => {

    const [myLearnings, setMyLearnings] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        axios({
            url : `https://rich-ruby-bison-veil.cyclic.app/users/${userId}`,
            method : 'get'
        })
        .then((res) => {
            // console.log(res.data);
            let userData = res.data;

            setMyLearnings(userData.learning);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [userId]);

    return (
        <div>
            <Navbar />
            <Box bg="black" style={{ fontSize: "25px", color: "white", textAlign: "left", padding: "50px 200px" }}>
                <Heading style={{ fontFamily: "Montserrat, sans-serif" }}>My Active Courses</Heading>
            </Box>
            <Grid
                w="80%"
                margin="auto"
                marginTop="40px"
                templateColumns='repeat(3, 1fr)'
                gap={10}
                padding="20px 20px"
            >
                {
                    (myLearnings.length > 0) ? (
                        myLearnings.map((item) => (
                            <GridItem
                            key={item.id}
                            style={{
                              backgroundColor: "white",
                              width: "100%",
                              padding: "20px",
                              borderRadius: "25px",
                              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            }}
                          >
                            <Box style={{ textAlign: "left" }} my={5}>
                              <Heading size="md">{item.title}</Heading>
                              <p>Duration: {item.duration}</p>
                              <Box mt={5}>
                                <Progress colorScheme="blue" size="xs" value={0} />
                                <p>0% complete</p>
                                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                  You can start your eLearning by clicking the links below:
                                </p>
                              </Box>
                            </Box>
                            <Box>
                              <ul style={{ listStyleType: "none", padding: 0 }}>
                                <li style={{ marginBottom: "10px" }}>
                                  <a
                                    href="https://en.wikipedia.org/wiki/Business_analytics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "underline", color: "blue", fontSize: "16px" }}
                                  >
                                    {item.title}
                                  </a>
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                  <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "underline", color: "blue", fontSize: "16px" }}
                                  >
                                    Lecture - 1
                                  </a>
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                  <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "underline", color: "blue", fontSize: "16px" }}
                                  >
                                    Lecture - 2
                                  </a>
                                </li>
                                <li style={{ marginBottom: "10px" }}>
                                  <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "underline", color: "blue", fontSize: "16px" }}
                                  >
                                    Lecture - 3
                                  </a>
                                </li>
                              </ul>
                            </Box>
                          </GridItem>
                          
                          
                          
                        ))
                    ) : (
                        <Heading>No Learnings Yet</Heading>
                    )
                }
                
            </Grid>
            <Footer />
        </div>
    )
}

export default MyLearning