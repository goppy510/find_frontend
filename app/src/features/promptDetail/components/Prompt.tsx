import React from 'react';
import { useState } from 'react';
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import SuccessToast from '@/components/elements/toast/SuccessToast';

type Props = {
  text: string;
};

export default function Prompt({text}: Props) {
  const lines = text.split('\n');
  const height = `${2 + lines.length * 1.5}em`;

  const [showToast, setShowToast] = useState(false); 

  // コピーボタンがクリックされたときの処理
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setShowToast(true); // トーストを表示
    // 2秒後にトーストを非表示にする
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <Box
      w={{ base: '100%' }}
      minH={{ base: height }}
      bg="blue.900"
      color="white"
      borderRadius="xl"  // ここで角を丸める
      position="relative"
    >
      {showToast && <SuccessToast message="コピーしました" />}

      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Box fontSize="1xl" mb="4" mx="3">
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <IconButton 
          aria-label="プロンプトのコピー"
          icon={<FaCopy />}
          position="absolute"
          top="5px"
          right="5px"
          onClick={handleCopyClick}
        />
      </Flex>
    </Box>
  );
};
