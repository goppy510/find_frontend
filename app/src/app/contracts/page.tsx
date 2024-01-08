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
} from '@chakra-ui/react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import CreateContractModal from '@/features/contract/components/CreateContractModal';
import EditContractModal from '@/features/contract/components/EditContractModal';
import DeleteContractModal from '@/components/elements/deleteModal/DeleteModal';
import Loading from '@/components/elements/loading/Loading';
import { Contract } from '@/features/contract/types/contractTypes';
import useFetchContracts from '@/features/contract/hooks/useFetchContracts';
import useCreateContract from '@/features/contract/hooks/useCreateContracts';
import useEditContract from '@/features/contract/hooks/useEditContracts';
import useDeleteContracts from '@/features/contract/hooks/useDeleteContracts';
import SuccessToast from '@/components/elements/toast/SuccessToast';
import ErrorToast from '@/components/elements/toast/ErrorToast';

export default function Contracts() {
  const localStorageUserId = localStorage.getItem('userId');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<
    Contract | undefined
  >(undefined);

  // 契約一覧取得API
  const {
    contracts,
    setContracts,
    isLoading: fetchIsLoading,
    errorMessage: fetchErrorMessage,
    handleFetch,
  } = useFetchContracts();

  // 契約削除API
  const {
    deleteContract,
    isLoading: deleteIsLoading,
    errorMessage: deleteErrorMessage,
    successMessage: deleteSuccessMessage,
  } = useDeleteContracts();

  // 契約編集API
  const {
    isLoading: editIsLoading,
    errorMessage: editErrorMessage,
    successMessage: editSuccessMessage,
    handleEdit,
    isEdited,
    setIsEdited,
  } = useEditContract();

  // 契約作成API
  const {
    errorMessage: createErrorMessage,
    duplicateErrorMessage,
    unprocessibleEntityErrorMessage,
    successMessage: createSuccessMessage,
    handleSignup,
    isCreated,
    setIsCreated,
  } = useCreateContract();

  const [justDeleted, setJustDeleted] = useState(false);

  // 削除操作
  const handleDeleteConfirm = async (email: string) => {
    if (selectedContract && selectedContract.email === email) {
      try {
        await deleteContract(selectedContract.user_id);
        setContracts((prevContracts) =>
          prevContracts.filter((c) => c.user_id !== selectedContract.user_id)
        );
        setDeleteModalOpen(false); // モーダルを閉じる
      } catch (error) {
        // エラー処理
      }
    }
  };

  // 編集操作
  const handleEditConfirm = async (maxMemberCount: string) => {
    if (selectedContract) {
      try {
        await handleEdit(selectedContract.user_id, maxMemberCount);
        setEditModalOpen(false); // モーダルを閉じる
      } catch (error) {
        // エラー処理
      }
    }
  };

  // 契約作成後の処理
  useEffect(() => {
    if (isCreated) {
      handleFetch();
      setIsCreated(false); // フラグをリセット
    }
  }, [isCreated, setIsCreated]);

  // 契約編集後の処理
  useEffect(() => {
    if (isEdited) {
      handleFetch();
      setIsEdited(false); // フラグをリセット
    }
  }, [isEdited, setIsEdited]);

  // 削除後の処理
  useEffect(() => {
    if (justDeleted) {
      // 契約リストを更新
      const updatedContracts = contracts.filter(
        (c) => c.user_id !== selectedContract?.user_id
      );
      setContracts(updatedContracts);
      setJustDeleted(false); // フラグをリセット
      setSelectedContract(undefined); // 選択した契約をリセット
    }
  }, [justDeleted, selectedContract, contracts, setContracts]);

  // 契約削除モーダルを閉じる
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedContract(undefined);
    if (deleteSuccessMessage) {
      return <SuccessToast message={deleteSuccessMessage} />;
    }
  };

  // 契約編集モーダルを閉じる
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedContract(undefined);
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
      {duplicateErrorMessage && <ErrorToast message={duplicateErrorMessage} />}
      {unprocessibleEntityErrorMessage && (
        <ErrorToast message={unprocessibleEntityErrorMessage} />
      )}
      {deleteErrorMessage && <ErrorToast message={deleteErrorMessage} />}
      {createErrorMessage && <ErrorToast message={createErrorMessage} />}
      {editErrorMessage && <ErrorToast message={editErrorMessage} />}
      {fetchErrorMessage && <ErrorToast message={fetchErrorMessage} />}

      <Button
        colorScheme="blue"
        onClick={() => setCreateModalOpen(true)}
        position="absolute"
        top={20}
        right={20}
      >
        契約作成
      </Button>

      <CreateContractModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onCreate={(email, password, maxMemberCount) => {
          handleSignup(email, password, maxMemberCount);
        }}
      />

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>契約ID</Th>
            <Th>ユーザーID</Th>
            <Th>email</Th>
            <Th>アクティベーション</Th>
            <Th>最大契約メンバー数</Th>
            <Th>契約データ作成日時</Th>
            <Th>契約データ更新日</Th>
            <Th>操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contracts.map((contract) => (
            <Tr key={contract.contract_id}>
              <Td>{contract.contract_id}</Td>
              <Td>{contract.user_id}</Td>
              <Td>{contract.email}</Td>
              <Td>{contract.activated ? '済' : '未'}</Td>
              <Td>{contract.max_member_count}</Td>
              <Td>{new Date(contract.created_at).toLocaleString()}</Td>
              <Td>{new Date(contract.updated_at).toLocaleString()}</Td>
              <Td>
                <IconButton
                  aria-label="編集"
                  icon={<FaPen />}
                  onClick={() => {
                    setSelectedContract(contract);
                    setEditModalOpen(true);
                  }}
                />
                {localStorageUserId !== contract.user_id.toString() && (
                  <IconButton
                    aria-label="削除"
                    icon={<FaTrashAlt />}
                    onClick={() => {
                      setSelectedContract(contract);
                      setDeleteModalOpen(true);
                    }}
                  />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {selectedContract && (
        <EditContractModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onEdit={(maxMemberCount) =>
            handleEditConfirm(maxMemberCount.toString())
          }
          placeholder={selectedContract.max_member_count.toString()}
        />
      )}
      {selectedContract && (
        <DeleteContractModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onDelete={() => handleDeleteConfirm(selectedContract.email)}
          confirmText={selectedContract.email}
          placeholder={selectedContract.email}
        />
      )}
    </>
  );
}
