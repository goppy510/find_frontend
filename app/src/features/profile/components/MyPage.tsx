"use client";
import {
  Box,
  Avatar,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Grid,
  GridItem,
  Icon
} from "@chakra-ui/react";
import { FaEye, FaBookReader, FaThumbsUp } from 'react-icons/fa';
import { MyPageType } from "@/features/profile/types/myPageTypes";

type MyPageProps = {
  profile: MyPageType;
};

export default function MyPage({ profile }: MyPageProps) {
  return (
    <Grid
      templateAreas={`
        "dashbord"
        "profile"
        "contents"
      `}
      templateRows="3.5fr 1fr 6fr"
      h="100vh"
      w="100%"
      gap={2}
    >
      <GridItem area="dashbord">
        <Box
          h="10em"
          border="1px"
          borderColor="gray.200"
          borderRadius="lg"
          boxShadow="xl"
          display="flex"
          alignItems="center"
        >
          <Grid
            templateAreas={`
              "avatar statistics"
            `}
            templateColumns="7fr 5fr"
            w="100%"
          >
            <GridItem area="avatar">
              <Box ml="10px">
                <Avatar
                  size="2xl"
                  src={profile.avatar}
                  mx="auto" // アバターを中央に揃える
                  my="auto"
                />
              </Box>
            </GridItem>
            <GridItem area="statistics">
              <Flex
                h="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Box w="20em">
                  <StatGroup spacing={6}>
                    <Stat>
                      <StatNumber>{profile.memberViews}</StatNumber>
                      <StatLabel>閲覧数 <Icon as={FaBookReader} /></StatLabel>
                    </Stat>

                    <Stat>
                      <StatNumber>{profile.likes}</StatNumber>
                      <StatLabel>いいね！ <Icon as={FaThumbsUp} /></StatLabel>
                    </Stat>

                    <Stat>
                      <StatNumber>{profile.views}</StatNumber>
                      <StatLabel>表示数 <Icon as={FaEye} /></StatLabel>
                    </Stat>
                  </StatGroup>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
      <GridItem area="profile">
        <Flex>
          <Box
            fontSize="2em"
            fontWeight="bold"
          >
            {profile.name}
          </Box>
        </Flex>
      </GridItem>
      <GridItem area="contents">
        <Tabs isLazy isFitted variant='enclosed' my={5}>
          <TabList mb='1em'>
            <Tab _selected={{ color: 'white', bg: 'teal.500' }} fontWeight='bold'>お気に入り</Tab>
            <Tab _selected={{ color: 'white', bg: 'teal.500' }} fontWeight='bold'>読んだプロンプト</Tab>
            <Tab _selected={{ color: 'white', bg: 'teal.500' }} fontWeight='bold'>投稿したプロンプト</Tab>
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
      </GridItem>
    </Grid>
  );
}
