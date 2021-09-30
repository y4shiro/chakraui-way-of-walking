import React, { FC, ReactNode, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { useIntersection } from 'use-intersection';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Link,
  LinkProps,
  Skeleton,
  Spinner,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const animals = ['dog', 'cat', 'rabbit', 'mouse', 'bird'];

const Chapter3: NextPage = () => {
  return (
    <>
      <Heading>Chapter3</Heading>
      <SomeItems items={animals} />

      <LazyLoadingAccordion title="open component">Hello</LazyLoadingAccordion>

      <LayoutWithMenu>
        <Box>
          Humburger Humburger Humburger Humburger Humburger Humburger Humburger
          Humburger Humburger Humburger Humburger Humburger Humburger Humburger
          Humburger Humburger Humburger Humburger
        </Box>
      </LayoutWithMenu>
    </>
  );
};

const LazyElement: FC<{}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(ref, {
    rootMargin: '250px',
    once: true,
  });

  return (
    <div ref={ref}>
      <Skeleton isLoaded={intersecting}>{children}</Skeleton>
    </div>
  );
};

const SomeItems = ({ items }) => {
  return (
    <>
      {items.map((item: string) => {
        return <LazyElement key={item}>{item}</LazyElement>;
      })}
    </>
  );
};

const LazyLoadingAccordion: FC<{ title: ReactNode }> = ({
  title,
  children,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Accordion allowToggle reduceMotion>
      <AccordionItem>
        {({ isExpanded }) => {
          setLoaded(isExpanded || loaded);
          return (
            <>
              <AccordionButton fontSize="sm">
                <HStack>
                  <AccordionIcon />
                  <Box>{title}</Box>
                </HStack>
              </AccordionButton>
              <AccordionPanel>{loaded ? children : <Spinner />}</AccordionPanel>
            </>
          );
        }}
      </AccordionItem>
    </Accordion>
  );
};

const HoverLink = (props: LinkProps) => (
  <Link rounded="base" _hover={{ bg: 'gray.200' }} p={2} {...props} />
);

const Navigation = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/bugrer">Burger</HoverLink>
      <HoverLink href="/sidemenu">Sidemenu</HoverLink>
      <HoverLink href="/drink">Drink</HoverLink>
      <HoverLink href="/takeout">Takeout</HoverLink>
    </Stack>
  );
};

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const LayoutWithMenu: FC<{}> = ({ children }) => {
  return (
    <Stack>
      <HStack p={5}>
        <Box display={{ base: 'block', md: 'none' }}>
          <DrawerMenu />
        </Box>
        <Heading>Humberger Shop</Heading>
      </HStack>
      <HStack alignItems="start">
        <Box display={{ base: 'none', md: 'block' }} w={500} px={6}>
          <Navigation />
        </Box>
        <Box>{children}</Box>
      </HStack>
    </Stack>
  );
};

export default Chapter3;
