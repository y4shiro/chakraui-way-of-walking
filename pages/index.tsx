import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {
  Box,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Box
        top={0}
        position="sticky"
        zIndex={'sticky'}
        backgroundColor="lightgray"
      >
        ヘッダ
      </Box>
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
      <Box
        background={'blue.100'}
        borderColor={'teal.300'}
        color={'green.800'}
        borderBottomWidth={4}
        p={2}
      >
        background={'blue.100'} borderColor={'teal.300'} color={'green.800'}
      </Box>

      <Button colorScheme="green">Green Button</Button>
      <Button colorScheme="blue">Blue Button</Button>
      <Button colorScheme="red">Red Button</Button>
      <Tabs colorScheme="red">
        <TabList>
          <Tab>dog</Tab>
          <Tab>cat</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text fontSize="sm">Small Text</Text>

      <Box p={4} backgroundColor={'blue.100'} />
      <Box p={'4px'} backgroundColor={'blue.200'} />
    </>
  );
};

export default Home;
