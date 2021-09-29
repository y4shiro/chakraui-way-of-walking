import type { NextPage } from 'next';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
} from '@chakra-ui/react';

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

      <CommentItemBox />
      <CommentItemHStack />
    </>
  );
};

const CommentItemBox = () => {
  return (
    <Box display="flex" flexDirection="row" p={4}>
      <Avatar />
      <Box>
        <Heading size="sm">Some member</Heading>
        <Box>
          あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波
        </Box>
      </Box>
    </Box>
  );
};

const CommentItemHStack = () => {
  return (
    <HStack p={4}>
      <Avatar />
      <Stack>
        <Heading size="sm">Some member</Heading>
        <Box>
          あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波
        </Box>
      </Stack>
    </HStack>
  );
};

export default Chapter2;
