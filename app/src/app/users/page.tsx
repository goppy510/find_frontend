'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Button,
  Box,
  Flex,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import Loading from '@/components/elements/loading/Loading';
import SuccessToast from '@/components/elements/toast/SuccessToast';
import ErrorToast from '@/components/elements/toast/ErrorToast';
import { User } from '@/features/user/types/userTypes';
import CreateUserModal from '@/features/user/components/CreateUserModal';
import DeleteUserModal from '@/components/elements/deleteModal/DeleteModal';
import useFetchUsers from '@/features/user/hooks/useFetchUsers';
import useCreateUser from '@/features/user/hooks/useCreateUser';
import useDeleteUser from '@/features/user/hooks/useDeleteUser';

export default function Contracts() {
  const localStorageUserId = localStorage.getItem('userId');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  // 一覧取得API
  const {
    users,
    setUsers,
    isLoading: fetchIsLoading,
    errorMessage: fetchErrorMessage,
    handleFetch,
  } = useFetchUsers();

  // 契約作成API
  const {
    errorMessage: createErrorMessage,
    duplicateErrorMessage,
    unprocessibleEntityErrorMessage,
    successMessage: createSuccessMessage,
    handleSignup,
    isCreated,
    setIsCreated,
    setSuccessMessage: setCreateSuccessMessage,
    setErrorMessage: setCreateErrorMessage,
  } = useCreateUser();

  // 削除API
  const {
    handleDelete,
    isLoading: deleteIsLoading,
    errorMessage: deleteErrorMessage,
    successMessage: deleteSuccessMessage,
    setSuccessMessage: setDeleteSuccessMessage,
    setErrorMessage: setDeleteErrorMessage,
  } = useDeleteUser();

  const [justDeleted, setJustDeleted] = useState(false);

  // 削除操作
  const handleDeleteConfirm = async (email: string) => {
    if (selectedUser && selectedUser.email === email) {
      try {
        await handleDelete(selectedUser.user_id);
        setUsers((prevUsers) =>
          prevUsers.filter((u) => u.user_id !== selectedUser.user_id)
        );
        setDeleteModalOpen(false); // モーダルを閉じる
      } catch (error) {
        // エラー処理
      }
    }
  };

  // 作成後の処理
  useEffect(() => {
    if (isCreated) {
      handleFetch();
      setIsCreated(false);
      setCreateSuccessMessage('');
      setCreateErrorMessage('');
    }
  }, [isCreated, setIsCreated]);

  // 削除後の処理
  useEffect(() => {
    if (justDeleted) {
      // リストを更新
      const updatedUsers = users.filter(
        (u) => u.user_id !== selectedUser?.user_id
      );
      setUsers(updatedUsers);
      setJustDeleted(false);
      setSelectedUser(undefined);
      setDeleteSuccessMessage('');
      setDeleteErrorMessage('');
    }
  }, [justDeleted, selectedUser, users, setUsers]);

  // 作成モーダルを閉じる
  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  // 削除モーダルを閉じる
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedUser(undefined);
  };

  if (fetchIsLoading || deleteIsLoading) {
    return <Loading />;
  }

  return (
    <>
      {deleteSuccessMessage && <SuccessToast message={deleteSuccessMessage} />}
      {createSuccessMessage && <SuccessToast message={createSuccessMessage} />}
      {duplicateErrorMessage && <ErrorToast message={duplicateErrorMessage} />}
      {unprocessibleEntityErrorMessage && (
        <ErrorToast message={unprocessibleEntityErrorMessage} />
      )}
      {deleteErrorMessage && <ErrorToast message={deleteErrorMessage} />}
      {createErrorMessage && <ErrorToast message={createErrorMessage} />}
      {fetchErrorMessage && <ErrorToast message={fetchErrorMessage} />}

      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onCreate={(email, password) => {
          handleSignup(email, password);
        }}
      />

      {selectedUser && (
        <DeleteUserModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onDelete={() => handleDeleteConfirm(selectedUser.email)}
          confirmText={selectedUser.email}
          placeholder={selectedUser.email}
        />
      )}

      <Box mb={4} overflow="hidden">
        <Flex justifyContent="flex-end">
          <Button colorScheme="blue" onClick={() => setCreateModalOpen(true)}>
            メンバー作成
          </Button>
        </Flex>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>契約ID</Th>
            <Th>ユーザーID</Th>
            <Th>email</Th>
            <Th>アクティベーション</Th>
            <Th>データ作成日時</Th>
            <Th>データ更新日</Th>
            <Th>操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.contract_id}>
              <Td>{user.contract_id}</Td>
              <Td>{user.user_id}</Td>
              <Td>{user.email}</Td>
              <Td>{user.activated ? '済' : '未'}</Td>
              <Td>{new Date(user.created_at).toLocaleString()}</Td>
              <Td>{new Date(user.updated_at).toLocaleString()}</Td>
              <Td>
                {localStorageUserId !== user.user_id.toString() && (
                  <IconButton
                    aria-label="削除"
                    icon={<FaTrashAlt />}
                    colorScheme="red"
                    onClick={() => {
                      setSelectedUser(user);
                      setDeleteModalOpen(true);
                    }}
                  />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
