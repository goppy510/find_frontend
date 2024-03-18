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
    errorMessage,
    handleFetch,
  } = useFetchPermissions();

  const {
    errorMessage: createErrorMessage,
    successMessage: createSuccessMessage,
    handleCreate,
    isCreated,
    setIsCreated,
  } = useCreatePermission();

  const {
    errorMessage: editErrorMessage,
    successMessage: editSuccessMessage,
    isLoading: editIsLoading,
    handleEdit,
    isEdited,
    setIsEdited,
  } = useEditPermission();

  const {
    errorMessage: deleteErrorMessage,
    successMessage: deleteSuccessMessage,
    isLoading: deleteIsLoading,
    handleDelete,
  } = useDeletePermission();

  const [justDeleted, setJustDeleted] = useState(false);

  // 削除操作
  const handleDeleteConfirm = async (email: string) => {
    if (selectedPermission && selectedPermission.email === email) {
      try {
        await handleDelete(selectedPermission.email);
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

  // 編集操作
  const handleEditConfirm = async (amail: string, permissions: string[]) => {
    if (selectedPermission) {
      try {
        await handleEdit(selectedPermission.email, permissions);
        setEditModalOpen(false); // モーダルを閉じる
      } catch (error) {
        // エラー処理
      }
    }
  };

  const reversePermissionMap = Object.entries(permissionMap).reduce(
    (acc, [jp, en]) => {
      acc[en] = jp;
      return acc;
    },
    {} as { [key: string]: string }
  );

  // 権限列の値を日本語に変換して表示
  const renderPermissions = (permissionList: string[]) => {
    return permissionList
      .map((permission) => reversePermissionMap[permission] || permission)
      .join(', ');
  };

  const calculateCheckedPermissions = (userPermissions: string[]) => {
    // APIから取得したユーザーの権限名の配列を逆マッピングして日本語に変換
    const checkedPermissionLabels = userPermissions.map(
      (en) => reversePermissionMap[en] || en
    );
    // すべての権限に対するチェック状態のマップを作成
    const allPermissionsCheckedState: { [key: string]: boolean } = {};
    Object.keys(permissionMap).forEach((jp) => {
      allPermissionsCheckedState[jp] = checkedPermissionLabels.includes(jp);
    });
    return allPermissionsCheckedState;
  };

  // 作成後の処理
  useEffect(() => {
    if (isCreated) {
      handleFetch();
      setIsCreated(false); // フラグをリセット
    }
  }, [isCreated, setIsCreated]);

  // 編集後の処理
  useEffect(() => {
    if (isEdited) {
      handleFetch();
      setIsEdited(false); // フラグをリセット
    }
  }, [isEdited, setIsEdited]);

  // 削除後の処理
  useEffect(() => {
    if (justDeleted) {
      const updatedPermissions = permissions.filter(
        (p) => p.email !== selectedPermission?.email
      );
      setPermissions(updatedPermissions);
      setJustDeleted(false); // フラグをリセット
      setSelectedPermission(undefined); // 選択した権限をリセット
    }
  }, [justDeleted, selectedPermission, permissions, setPermissions]);

  // 削除モーダルを閉じる
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedPermission(undefined);
    if (deleteSuccessMessage) {
      return <SuccessToast message={deleteSuccessMessage} />;
    }
  };

  // 編集モーダルを閉じる
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedPermission(undefined);
    if (editSuccessMessage) {
      return <SuccessToast message={editSuccessMessage} />;
    }
  };

  // 契約作成モーダルを閉じる
  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
    if (createSuccessMessage) {
      return <SuccessToast message={createSuccessMessage} />;
    }
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
            handleEditConfirm(selectedPermission.email, permissions)
          }
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
