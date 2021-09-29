import type { NextPage } from 'next';
import { Box, Button, Flex, Grid, Heading, Stack } from '@chakra-ui/react';

const sampleText: string[] = ['dog', 'cat', 'rabbit'];

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

      <h2>Box の場合</h2>
      <Box>
        {sampleText.map((item) => (
          <Box p={2} bg="red.100" key={item}>
            {item}
          </Box>
        ))}
      </Box>

      <h2>Stack の場合</h2>
      <Stack>
        {sampleText.map((item) => (
          <Box p={2} bg="blue.100" key={item}>
            {item}
          </Box>
        ))}
      </Stack>

      <h2>Grid の場合</h2>
      <Grid gap={2}>
        {sampleText.map((item) => (
          <Box p={2} bg="green.100" key={item}>
            {item}
          </Box>
        ))}
      </Grid>

      <h2>Flex の場合</h2>
      <Flex direction="column" gridGap={2}>
        {sampleText.map((item) => (
          <Box p={2} bg="yellow.200" key={item}>
            {item}
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Chapter2;
