"use client";
import {
  Box,
  Container,
  Avatar,
  WrapItem,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Grid,
  GridItem,
  Icon
} from "@/features/components";
import {
  FaEye,
  FaBookReader,
  FaThumbsUp
} from 'react-icons/fa';
import NextLink from "next/link";
import { AccountType } from "@/features/account/types/account_types";

type AccountProps = {
  account: AccountType;
};


export default function AccountPage({ account }: AccountProps) {
  return (
    <Grid
      templateAreas={`
        "dashbord"
        "profile"
        "contents"
      `}
      templateRows="200px 60px 1fr"
      h="100vh"
      w="100%"
      gap={2}
    >
      <GridItem area="dashbord">
        <Box
          h="100px"
          border="1px"
          borderColor="gray.200"
          borderRadius="lg"
          boxShadow="xl"
          display="flex"
          alignItems="center"
          position="relative" // 親要素を相対的位置に設定
        >
          <Grid
            templateAreas={`
              "avater statistics"
            `}
            templateColumns="500px 1fr"
            w="100%"
          />
          <GridItem area="avater">
            <Box position="absolute" top={30} left={10} right={0} bottom={0}>
              <Avatar
                size="2xl"
                src={account.creatorIcon}
                mx="auto" // アバターを中央に揃える
                my="auto"
              />
            </Box>
          </GridItem>
          <GridItem area="statistics">
            <Box w="500px">
              <StatGroup spacing={6}>
                <Stat>
                  <StatNumber>{account.views}</StatNumber>
                  <StatLabel>閲覧数 <Icon as={FaBookReader} /></StatLabel>
                </Stat>

                <Stat>
                  <StatNumber>{account.like}</StatNumber>
                  <StatLabel>いいね！ <Icon as={FaThumbsUp} /></StatLabel>
                </Stat>

                <Stat>
                  <StatNumber>{account.views}</StatNumber>
                  <StatLabel>表示数 <Icon as={FaEye} /></StatLabel>
                </Stat>
              </StatGroup>
            </Box>
          </GridItem>
        </Box>
      </GridItem>
      <GridItem area="profile">
        <Flex>
          <Box
            fontSize="3xl"
            fontWeight="bold"
          >
            {account.creatorName}
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
