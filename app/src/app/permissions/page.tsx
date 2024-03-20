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
import { FaPen, FaTrashAlt, FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import Loading from '@/components/elements/loading/Loading';
import SuccessToast from '@/components/elements/toast/SuccessToast';
import ErrorToast from '@/components/elements/toast/ErrorToast';
import {
  Permission,
  permissionMap,
} from '@/features/permission/types/permissionTypes';
import CreatePermissionModal from '@/features/permission/components/CreatePermissionModal';
import EditPermissionModal from '@/features/permission/components/EditPermissionModal';
import DeletePermissionModal from '@/components/elements/deleteModal/DeleteModal';
import useFetchPermissions from '@/features/permission/hooks/useFetchPermissions';
import useCreatePermission from '@/features/permission/hooks/useCreatePermissions';
import useEditPermission from '@/features/permission/hooks/useEditPermissions';
import useDeletePermission from '@/features/permission/hooks/useDeletePermissions';
import { set } from 'react-hook-form';

// Permissionsページのメインコンポーネント
export default function Permissions() {
  const localStorageUserId = localStorage.getItem('userId');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState<
    Permission | undefined
  >(undefined);

  const {
    permissions,
    setPermissions,
    isLoading: fetchIsLoading,
    errorMessage: fetchErrorMessage,
    handleFetch,
  } = useFetchPermissions();

  const {
    errorMessage: createErrorMessage,
    successMessage: createSuccessMessage,
    handleCreate,
    isCreated,
    setIsCreated,
    setSuccessMessage: setCreateSuccessMessage,
    setErrorMessage: setCreateErrorMessage,
  } = useCreatePermission();

  const {
    errorMessage: editErrorMessage,
    successMessage: editSuccessMessage,
    isLoading: editIsLoading,
    handleUpdate,
    isEdited,
    setIsEdited,
    setSuccessMessage: setEditSuccessMessage,
    setErrorMessage: setEditErrorMessage,
  } = useEditPermission();

  const {
    errorMessage: deleteErrorMessage,
    successMessage: deleteSuccessMessage,
    isLoading: deleteIsLoading,
    handleDelete,
    setSuccessMessage: setDeleteSuccessMessage,
    setErrorMessage: setDeleteErrorMessage,
  } = useDeletePermission();

  const [justDeleted, setJustDeleted] = useState(false);
  const reversePermissionMap = Object.entries(permissionMap).reduce(
    (acc, [jp, en]) => {
      acc[en] = jp;
      return acc;
    },
    {} as { [key: string]: string }
  );

  const checkedPermissionsJp = (userPermissions: string[]) => {
    // APIから取得したユーザーの権限名の配列を逆マッピングして日本語に変換
    return userPermissions.map((en) => reversePermissionMap[en] || en);
  };

  const calculateCheckedPermissions = (userPermissions: string[]) => {
    // すべての権限に対するチェック状態のマップを作成
    const allPermissionsCheckedState: { [key: string]: boolean } = {};
    Object.keys(permissionMap).forEach((jp) => {
      allPermissionsCheckedState[jp] =
        checkedPermissionsJp(userPermissions).includes(jp);
    });
    return allPermissionsCheckedState;
  };

  // 削除操作
  const handleDeleteConfirm = async (email: string) => {
    if (selectedPermission && selectedPermission.email === email) {
      try {
        await handleDelete(selectedPermission.user_id.toString());
        setPermissions((prevPermissions) =>
          prevPermissions.filter(
            (p) => p.user_id !== selectedPermission.user_id
          )
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

  // 編集後の処理
  useEffect(() => {
    if (isEdited) {
      handleFetch();
      setIsEdited(false);
      setEditSuccessMessage('');
      setEditErrorMessage('');
    }
  }, [isEdited, setIsEdited]);

  // 削除後の処理
  useEffect(() => {
    if (justDeleted) {
      const updatedPermissions = permissions.filter(
        (p) => p.email !== selectedPermission?.email
      );
      setPermissions(updatedPermissions);
      setJustDeleted(false);
      setSelectedPermission(undefined);
      setDeleteSuccessMessage('');
      setDeleteErrorMessage('');
    }
  }, [justDeleted, selectedPermission, permissions, setPermissions]);

  // 削除モーダルを閉じる
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedPermission(undefined);
  };

  // 編集モーダルを閉じる
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedPermission(undefined);
  };

  // 作成モーダルを閉じる
  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  if (fetchIsLoading || deleteIsLoading) {
    return <Loading />;
  }

  return (
    <>
      {deleteSuccessMessage && <SuccessToast message={deleteSuccessMessage} />}
      {createSuccessMessage && <SuccessToast message={createSuccessMessage} />}
      {editSuccessMessage && <SuccessToast message={editSuccessMessage} />}
      {deleteErrorMessage && <ErrorToast message={deleteErrorMessage} />}
      {createErrorMessage && <ErrorToast message={createErrorMessage} />}
      {editErrorMessage && <ErrorToast message={editErrorMessage} />}
      {fetchErrorMessage && <ErrorToast message={fetchErrorMessage} />}

      <CreatePermissionModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onCreate={(email, permissions) => {
          handleCreate(email, permissions);
        }}
      />

      {selectedPermission && (
        <EditPermissionModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onEdit={(permissions) =>
            handleUpdate(selectedPermission.user_id.toString(), permissions)
          }
          email={selectedPermission.email}
          selectedPermissions={checkedPermissionsJp(
            selectedPermission.permissions
          )}
        />
      )}

      {selectedPermission && (
        <DeletePermissionModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onDelete={() => handleDeleteConfirm(selectedPermission.email)}
          confirmText={selectedPermission.email}
          placeholder={selectedPermission.email}
        />
      )}

      <Box mb={4} overflow="hidden">
        <Flex justifyContent="flex-end">
          <Button colorScheme="blue" onClick={() => setCreateModalOpen(true)}>
            権限作成
          </Button>
        </Flex>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>契約ID</Th>
            <Th>ユーザーID</Th>
            <Th>email</Th>
            <Th>権限</Th>
            <Th>操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {permissions?.map((permission) => {
            const checkedPermissions = calculateCheckedPermissions(
              permission.permissions
            );
            return (
              <Tr key={permission.user_id}>
                <Td>{permission.contract_id}</Td>
                <Td>{permission.user_id}</Td>
                <Td>{permission.email}</Td>
                <Td>
                  {Object.keys(permissionMap).map((jp) => (
                    <Box key={jp} display="flex" alignItems="center">
                      {checkedPermissions[jp] ? (
                        <FaCheckSquare />
                      ) : (
                        <FaRegSquare />
                      )}
                      <Box ml={2}>{jp}</Box>
                    </Box>
                  ))}
                </Td>
                <Td>
                  <IconButton
                    aria-label="編集"
                    icon={<FaPen />}
                    onClick={() => {
                      setSelectedPermission(permission);
                      setEditModalOpen(true);
                    }}
                    mr={2}
                  />
                  {localStorageUserId !== permission.user_id.toString() && (
                    <IconButton
                      aria-label="削除"
                      icon={<FaTrashAlt />}
                      colorScheme="red"
                      onClick={() => {
                        setSelectedPermission(permission);
                        setDeleteModalOpen(true);
                      }}
                    />
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
