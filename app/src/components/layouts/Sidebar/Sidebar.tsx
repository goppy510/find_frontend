"use client";
import {
  Box,
  Flex,
  Icon,
  Text
} from "@chakra-ui/react";
import {
  FaHome,
  FaUser,
  FaRegFrown
} from "react-icons/fa";
import { useState, useEffect, MouseEvent } from "react";

type NavItemProps = {
  icon: any;
  children: any;
  href: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem = ({ icon, children, href, onClick }: NavItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      as="a"
      href={href}
      alignItems="center"
      p={3}
      pl={10}
      borderRadius="md"
      w="100%"
      _hover={{ color: "teal.500", bg: "teal.50", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Flex alignItems="center" onClick={onClick}> {/* onClickをFlexに適用 */}
        {icon && <Icon as={icon} boxSize="2em" mr={6} />}
        <Text fontWeight={hover ? "bold" : "normal"}>{children}</Text>
      </Flex>
    </Box>
  );
};

export default function Sidebar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setLoggedIn(true);
    }
  }, []);


  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // デフォルトのリンク動作をキャンセル
    localStorage.removeItem('jwtToken'); // JWTトークンを削除
    setLoggedIn(false); // ログインの状態を更新
    window.location.href = '/';
  };

  return (
    <Box py={4}>
      <Flex justifyContent="center" direction="column">
        <NavItem icon={FaHome} href="/">ホーム</NavItem>
        <NavItem icon={FaUser} href="/profile">マイページ</NavItem>
        {loggedIn && <NavItem icon={FaRegFrown} href="/logout" onClick={handleLogout}>ログアウト</NavItem>}
      </Flex>
    </Box>
  );
};
