import { Box, Flex, Grid, GridItem, Heading, Input, Radio, RadioGroup, Select, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer"

const ITTraining = () => {
  const [itData, setITData] = useState([]);
  const [query, setQuery] = useState('');
  const [spec, setSpec] = useState('');
  const [level, setLevel] = useState('');

  const fetchProgramsBySearch = (query) => {
    return `https://rich-ruby-bison-veil.cyclic.app/IT?q=${query}`;
  };

  const fetchPrograms = (spec, level) => {
    if (spec === '' && level === '') {
      return `https://rich-ruby-bison-veil.cyclic.app/IT`;
    } else if (spec !== '' && level === '') {
      return `https://rich-ruby-bison-veil.cyclic.app/IT?specialization=${spec}`;
    } else if (spec === '' && level !== 'all') {
      return `https://rich-ruby-bison-veil.cyclic.app/IT?level=${level}`;
    } else {
      return `https://rich-ruby-bison-veil.cyclic.app/IT?specialization=${spec}&level=${level}`;
    }
  };

  useEffect(() => {
    let fetchURL;
    if (query !== '') {
      fetchURL = fetchProgramsBySearch(query);
    } else {
      fetchURL = fetchPrograms(spec, level);
    }

    axios({
      url: fetchURL,
      method: 'get',
    })
      .then((res) => {
        setITData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, spec, level]);

  const levelOptions = ['All', 'Advanced', 'Intermediate', 'Beginner'];

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />
      <Heading style={{ textAlign: 'left', padding: '30px 30px' }}>Information & Technology</Heading>
      <Flex bg="gray.100" style={{ padding: '30px' }}>
        <Box w="50%" style={{ borderRadius: '25px', background: 'white', padding: '20px' }}>
          <Text style={{ fontWeight: '700', fontSize: '20px', paddingBottom: '15px' }}>Program Search</Text>
          <Input type="text" placeholder="The name of the program ..." onChange={(e) => setQuery(e.target.value)} />
        </Box>
        <Spacer />
        <Box w="30%" style={{ borderRadius: '25px', background: 'white', padding: '20px' }}>
          <Text style={{ fontWeight: '700', fontSize: '20px', paddingBottom: '15px' }}>Level</Text>
          <Select value={level} onChange={(e) => setLevel(e.target.value.toLowerCase())}>
            {levelOptions.map((opt) => (
              <option key={opt} value={opt.toLowerCase()}>
                {opt}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
      <Grid w="70%" margin="auto" templateColumns="repeat(1, 1fr)" gap={10} paddingTop="20px">
        {itData.map((program) => (
          <Link key={program.id} to={`/programs/${program.id}`}>
            <GridItem
              style={{
                height: '300px',
                borderRadius: '25px',
                padding: '15px',
                backgroundColor: 'white',
                textAlign: 'left',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                position: 'relative',
              }}
            >
              <Heading style={{ textAlign: 'center', color: '#002D62' }}>{program.title}</Heading>
              <Box my={6}>
                <p style={{ textAlign: 'left' }}>Description : {program.description}</p>
              </Box>
              <Box style={{ position: 'absolute', bottom: '20px' }}>
                <p>
                  <span style={{ fontWeight: '600' }}>Specialization : </span>
                  {program.specialization}
                </p>
                <p>
                  <span style={{ fontWeight: '600' }}>Duration : </span>
                  {program.duration}
                </p>
                <p>
                  <span style={{ fontWeight: '600' }}>Level : </span>
                  {program.level}
                </p>
                <h3 style={{ color: '#002D62', fontSize: '30px', fontWeight: '700' }}>
                  <span style={{ fontWeight: '600',textAlign: 'center'}}>Price :</span>
                  {program.Price}
                </h3>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Footer/>
    </div>
  );
};

export default ITTraining;
