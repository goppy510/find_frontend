"use client";
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup
} from "@chakra-ui/react";
import NextLink from "next/link";

import LoginButton from "@/features/login/components/LoginButton";
import SignUpButton from "@/features/signup/components/SignupButton";

export default function Header() {
  // ログイン状態を監視するための状態
  const [loggedIn, setLoggedIn] = useState(false);

  // コンポーネントがマウントされたときにlocalStorageをチェック
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('jwtToken');
      setLoggedIn(Boolean(token));
    };

    // 初回マウント時の確認
    checkToken();

    // storageイベントのリスナーを設定
    const handleStorageChange = (e) => {
      if (e.key === 'jwtToken') {
        checkToken();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);// 空の依存配列を渡すことで、このエフェクトはコンポーネントのマウント時にのみ実行されます。

  return (
    <Box as="header" className="header" position="fixed" top={0} left={0} right={0} zIndex={999}>
      <Flex
        bg="white"
        color="gray.600"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <NextLink href="/">PromptData</NextLink>
          </Heading>
          <Spacer />
          {
            // loggedInがfalseの場合のみ、ログインボタンと会員登録ボタンを表示
            !loggedIn && (
              <ButtonGroup gap='2'>
                <LoginButton />
                <SignUpButton />
              </ButtonGroup>
            )
          }
        </Flex>
      </Flex>
    </Box>
  );
}
