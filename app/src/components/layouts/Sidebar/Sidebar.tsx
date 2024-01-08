'use client';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import {
  FaHome,
  FaKey,
  FaUser,
  FaRegFrown,
  FaUserFriends,
  FaFileContract,
} from 'react-icons/fa';
import { useState, useEffect, MouseEvent } from 'react';
import useFetchPermissions from '@/hooks/useFetchPermission';
import ErrorToast from '@/components/elements/toast/ErrorToast';

type NavItemProps = {
  icon: any;
  children: any;
  href: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const NavItem = ({ icon, children, href, onClick }: NavItemProps) => {
  const [hover, setHover] = useState(false);
  const currentPath = window.location.pathname;
  const isActive = currentPath === href;
  const activeStyle = isActive ? { color: 'teal.500', bg: 'teal.50' } : {};

  return (
    <Box
      as="a"
      href={href}
      alignItems="center"
      p={3}
      pl={10}
      borderRadius="md"
      w="100%"
      _hover={{ color: 'teal.500', bg: 'teal.50', cursor: 'pointer' }}
      {...activeStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <Flex alignItems="center">
        {' '}
        {/* onClickをFlexに適用 */}
        {icon && <Icon as={icon} boxSize="2em" mr={6} />}
        <Text fontWeight={hover ? 'bold' : 'normal'}>{children}</Text>
      </Flex>
    </Box>
  );
};

export default function Sidebar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { permissions, isLoading, errorMessage } = useFetchPermissions();

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

  const hasAdmin = permissions
    .map((permission) => permission.toString())
    .includes('admin');
  const hasContract = permissions
    .map((permission) => permission.toString())
    .includes('contract');
  const hasUser = permissions
    .map((permission) => permission.toString())
    .includes('user');
  const hasPermission = permissions
    .map((permission) => permission.toString())
    .includes('permission');
  const hasCreatePrompt = permissions
    .map((permission) => permission.toString())
    .includes('create_prompt');
  const hasReadPrompt = permissions
    .map((permission) => permission.toString())
    .includes('read_prompt');
  const hasUpdatePrompt = permissions
    .map((permission) => permission.toString())
    .includes('update_prompt');
  const hasDestroyPrompt = permissions
    .map((permission) => permission.toString())
    .includes('destroy_prompt');

  return (
    <Box py={4}>
      {errorMessage && <ErrorToast message={errorMessage} />}
      <Flex justifyContent="center" direction="column">
        {(hasReadPrompt || hasAdmin) && (
          <NavItem icon={FaHome} href="/">
            ホーム
          </NavItem>
        )}
        {(hasCreatePrompt || hasAdmin) && (
          <NavItem icon={FaUser} href="/prompts/create">
            プロンプト作成
          </NavItem>
        )}
        {(hasContract || hasAdmin) && (
          <NavItem icon={FaFileContract} href="/contracts">
            契約管理
          </NavItem>
        )}
        {(hasPermission || hasAdmin) && (
          <NavItem icon={FaKey} href="/permissions">
            権限管理
          </NavItem>
        )}
        {(hasUser || hasAdmin) && (
          <NavItem icon={FaUserFriends} href="/users">
            ユーザー管理
          </NavItem>
        )}
        <NavItem icon={FaUser} href="/profile/mypage">
          マイページ
        </NavItem>
        {loggedIn && (
          <NavItem icon={FaRegFrown} href="/logout" onClick={handleLogout}>
            ログアウト
          </NavItem>
        )}
      </Flex>
    </Box>
  );
}
