import React, { FC, useRef } from 'react';
import type { NextPage } from 'next';

import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { useIntersection } from 'use-intersection';

const animals = ['dog', 'cat', 'rabbit', 'mouse', 'bird'];

const Chapter3: NextPage = () => {
  return (
    <>
      <Heading>Chapter3</Heading>
      <SomeItems items={animals} />
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

export default Chapter3;
