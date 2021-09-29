import type { NextPage } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { Heading, List, ListItem } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Heading>Chakura UI の歩き方 & Tips</Heading>
      <List>
        <ListItem>
          <NextLink href="/chapter1">Chapter1</NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/chapter2">Chapter2</NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/chapter3">Chapter3</NextLink>
        </ListItem>
      </List>
    </>
  );
};

export default Home;
