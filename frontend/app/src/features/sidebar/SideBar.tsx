"use client";
import {
  Box,
  Flex,
  Icon,
  Text,
  Link
} from "@/features/components";
import {
  FaHome,
  FaUser,
  FaCog
} from "react-icons/fa";
import { useState } from "react";
import NextLink from "next/link";

type NavItemProps = {
  icon: any;
  children: any;
  href: string;
}

const NavItem = ({ icon, children, href }: NavItemProps) => {
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
      <Flex alignItems="center">
        {icon && <Icon as={icon} boxSize="30px" mr={6} />}
        <Text fontWeight={hover ? "bold" : "normal"}>{children}</Text>
      </Flex>
    </Box>
  );
};

export default function SideBar() {
  return (
    <Box py={4}>
      <Flex justifyContent="center" direction="column">
        <NavItem icon={FaHome} href="/">ホーム</NavItem>
        <NavItem icon={FaUser} href="/account">マイページ</NavItem>
      </Flex>
    </Box>
  );
};
