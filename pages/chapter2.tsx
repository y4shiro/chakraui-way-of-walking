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
  Spacer,
  chakra,
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

      <h2>Spacer はいいぞ</h2>
      <Flex>
        <Box bg={'red.100'}>Hello</Box>
        <Spacer />
        <Box bg={'red.100'}>Hello</Box>
        <Spacer />
        <Box bg={'red.100'}>Hello</Box>
      </Flex>

      <Flex justifyContent="space-between" p={4}>
        <Flex>
          <Box color="gray.500" px={1}>
            @taro:
          </Box>
          <Box fontWeight="bold">Hello!</Box>
        </Flex>
        <Flex>
          <Box color="gray.500">2021-09-29 12:00</Box>
        </Flex>
      </Flex>

      <Flex p={4}>
        <Box color="gray.500" px={1}>
          @taro:
        </Box>
        <Box fontWeight="bold">Hello!</Box>
        <Spacer />
        <Box color="gray.500">2021-09-29 12:00</Box>
      </Flex>

      <HStack p={4} spacing={1}>
        <Box color="gray.500">@taro:</Box>
        <Box fontWeight="bold">Hello!</Box>
        <Spacer />
        <Box color="gray.500">2021-09-29 12:00</Box>
      </HStack>

      <h2>chakra factory</h2>
      <Canvas w={100} h={100} bg="red.100" />
      <Marquee color="blue.500" bg="red.100">
        aaa
      </Marquee>
      <CanvasWithStyle />
      <RoundedButton>RoundedButton</RoundedButton>
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

const Canvas = chakra('canvas');
// @ts-ignore
const Marquee = chakra('marquee');

const CanvasWithStyle = chakra('canvas', {
  baseStyle: { w: 100, h: 100, bg: 'red.100' },
});

const RoundedButton = chakra(Button, {
  baseStyle: {
    rounded: 'full',
  },
});

export default Chapter2;
