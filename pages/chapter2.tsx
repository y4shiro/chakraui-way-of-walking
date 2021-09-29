import type { NextPage } from 'next';

import { Box, Heading, Button } from '@chakra-ui/react';

const Chapter2: NextPage = () => {
  return (
    <>
      <Heading>Chapter2</Heading>
      <Box m={4} p={4} boxShadow="md" backgroundColor="blue.100">
        boxShadow=md を付与した
      </Box>
      <Box
        m={4}
        p={4}
        rounded="full"
        boxShadow="xl"
        backgroundColor="lightgray"
      >
        rounded=full を付与した
      </Box>
      <Button m={4} shadow="md">
        Button Shadow
      </Button>
    </>
  );
};

export default Chapter2;
