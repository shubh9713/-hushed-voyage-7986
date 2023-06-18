import { Box, Flex, Grid, GridItem, Heading, Input, Radio, RadioGroup, Select, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

const Programming = () => {
  const [programmingData, setProgrammingData] = useState([]);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("");

  const fetchProgramsBySearch = (query) => {
    return `https://rich-ruby-bison-veil.cyclic.app/programming?q=${query}`;
  }

  const fetchPrograms = (level) => {
    if (level === "") {
      return `https://rich-ruby-bison-veil.cyclic.app/programming`;
    } else {
      return `https://rich-ruby-bison-veil.cyclic.app/programming?level=${level}`;
    }
  }

  useEffect(() => {
    let fetchURL;
    if (query !== "") {
      fetchURL = fetchProgramsBySearch(query);
    } else {
      fetchURL = fetchPrograms(level);
    }

    axios({
      url: fetchURL,
      method: 'get'
    })
      .then((res) => {
        setProgrammingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [query, level]);

  const levelOptions = [
    { value: '', label: 'All' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'beginner', label: 'Beginner' },
  ];

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Navbar />
      <Heading style={{ textAlign: "left", padding: "30px 30px" }}>Coding & Programming</Heading>
      <Flex bg="gray.100" style={{ padding: " 30px" }}>
        
          <Box w="50%" style={{ borderRadius: "25px", background: "white", padding: "20px" }}>
            <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Program Search</Text>
            <Input type="text" placeholder="Enter program name..." onChange={(e) => setQuery(e.target.value)} />
          </Box>
    
        <Spacer />
        
          <Box w="30%" style={{ borderRadius: "25px", background: "white", padding: "20px" }}>
            <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Level</Text>
            <Select placeholder="Select level" value={level} onChange={(e) => setLevel(e.target.value)}>
              {levelOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Select>
          </Box>
        
      </Flex>
      <Grid
        w="70%"
        margin="auto"
        templateColumns='repeat(1, 1fr)'
        gap={10}
        style={{ marginTop: '30px' }}
      >
        {programmingData.map((program) => (
          <Link key={program.id} to={`/programs/${program.id}`} >
            <GridItem style={{ height: "300px", borderRadius: "25px", padding: "15px", backgroundColor: "white", textAlign: "left", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", position: "relative" }}>
              <Heading style={{ textAlign: "left", color: "#002D62" }}>{program.title}</Heading>
              <Box my={6}>
                <p style={{ textAlign: "left" }}>{program.description}</p>
              </Box>
              <Box style={{ position: "absolute", bottom: "20px" }}>
                <p><span style={{ fontWeight: "600" }}>Specialization: </span>{program.specialization}</p>
                <p><span style={{ fontWeight: "600" }}>Duration: </span>{program.duration}</p>
                <p><span style={{ fontWeight: "600" }}>Level: </span>{program.level}</p>
                <h3 style={{ color: "#002D62", fontSize: "30px", fontWeight: "700" }}><span style={{ fontWeight: "600" }}>Price: </span>{program.Price}</h3>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Footer />
    </div>
  )
}

export default Programming;
