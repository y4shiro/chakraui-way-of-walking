import React, { FC, ReactNode, useRef, useState } from 'react';
import type { NextPage } from 'next';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Skeleton,
  Spinner,
} from '@chakra-ui/react';
import { useIntersection } from 'use-intersection';

const animals = ['dog', 'cat', 'rabbit', 'mouse', 'bird'];

const Chapter3: NextPage = () => {
  return (
    <>
      <Heading>Chapter3</Heading>
      <SomeItems items={animals} />

      <LazyLoadingAccordion title="open component">Hello</LazyLoadingAccordion>
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

export default Chapter3;
