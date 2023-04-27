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
} from "@/features/components";
import { FaEye, FaBookReader, FaThumbsUp } from 'react-icons/fa';
import NextLink from "next/link";
import { AccountType } from "@/features/account/types/account-types";

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
                  src={account.avatar}
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
                      <StatNumber>{account.memberViews}</StatNumber>
                      <StatLabel>閲覧数 <Icon as={FaBookReader} /></StatLabel>
                    </Stat>

                    <Stat>
                      <StatNumber>{account.likes}</StatNumber>
                      <StatLabel>いいね！ <Icon as={FaThumbsUp} /></StatLabel>
                    </Stat>

                    <Stat>
                      <StatNumber>{account.views}</StatNumber>
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
            {account.accountName}
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
