import type { NextPage } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import {
  Box,
  BoxProps,
  Button,
  Link,
  LinkProps,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Input,
  useBreakpointValue,
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
      {/* <Tabs colorScheme="red">
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
      </Tabs> */}

      <Text fontSize="sm">Small Text</Text>

      <Box p={4} backgroundColor={'blue.100'} />
      <Box p={'4px'} backgroundColor={'blue.200'} />

      <Text _hover={{ fontWeight: 'bold' }}>Hover Me!</Text>
      <Text color="blue.500" fontSize="sm" _hover={{ fontWeight: 'bold' }}>
        Hover Me!
      </Text>
      <Quoted>ここに任意の文字</Quoted>
      <Input
        placeholder="プレースホルダー"
        _placeholder={{ color: 'red.200' }}
      />

      <Box bg={['red.200', 'yellow.200', 'green.200', 'blue.200']}>
        配列でレスポンシブ指定
      </Box>
      <Box
        bg={{
          base: 'red.200',
          sm: 'yellow.200',
          md: 'green.200',
          lg: 'blue.200',
        }}
      >
        オブジェクトでレスポンシブ指定
      </Box>

      <SwitchMobileOrDesktop />

      <Button as="a" href="https://google.com">
        as=a button
      </Button>
      <NextLink href="https://google.com" passHref>
        <Button as="a">as=a button</Button>
      </NextLink>

      <ShadowBox>Hello</ShadowBox>
      <ShadowBox p={4}>Hello</ShadowBox>
      <HoverLink>HoverLink</HoverLink>
      <NumberingHoverLink number={1}>odd</NumberingHoverLink>
      <NumberingHoverLink number={2}>even</NumberingHoverLink>
    </>
  );
};

const Quoted: React.FC<{}> = ({ children }) => (
  <Box _before={{ content: `"「"` }} _after={{ content: `"」"` }}>
    {children}
  </Box>
);

const SwitchMobileOrDesktop: React.FC<{}> = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return <Box>{isMobile ? 'Mobile' : 'Desktop'}コンポーネント</Box>;
};

const ShadowBox: React.FC<BoxProps> = (props) => (
  <Box rounded="base" shadow="md" {...props} />
);

const HoverLink: React.FC<LinkProps> = (props) => {
  return <Link _hover={{ bg: 'teal.200' }} p={2} {...props} />;
};

const NumberingHoverLink: React.FC<{ number: number } & LinkProps> = ({
  number,
  ...linkProps
}) => {
  return (
    <Link
      _hover={{ bg: 'teal.200' }}
      bg={number % 2 ? 'gray.100' : 'white'}
      p={2}
      {...linkProps}
    />
  );
};

export default Home;
