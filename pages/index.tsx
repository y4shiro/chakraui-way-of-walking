import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <h1>Chakra やっていき</h1>
      <Box padding={10} backgroundColor="skyblue">
        padding={10} / backgroundColor= skyblue
      </Box>
      <Box p={10} backgroundColor="lightgreen">
        padding のショートハンド p={10}
      </Box>
      <Box px={10} my={10} backgroundColor="skyblue">
        px=10 my=10
      </Box>
    </>
  );
};

export default Home;
