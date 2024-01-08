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
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import useFetchContracts from '@/features/contract/hooks/useFetchContracts';
import DeleteContractModal from '@/components/elements/deleteModal/DeleteModal';
import Loading from '@/components/elements/loading/Loading';
import { Contract } from '@/features/contract/types/contractTypes';
import useDeleteContracts from '@/features/contract/hooks/useDeleteContracts';
import SuccessToast from '@/components/elements/toast/SuccessToast';
import ErrorToast from '@/components/elements/toast/ErrorToast';

export default function Contracts() {
  const localStorageUserId = localStorage.getItem('userId');
  const {
    contracts,
    setContracts,
    isLoading: contractIsLoading,
    errorMessage: fetchErrorMessage,
  } = useFetchContracts();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<
    Contract | undefined
  >(undefined);
  const {
    deleteContract,
    isLoading: deleteIsLoading,
    errorMessage: deleteErrorMessage,
    successMessage: deleteSuccessMessage,
  } = useDeleteContracts();

  const [justDeleted, setJustDeleted] = useState(false);

  // 削除操作
  const handleDeleteConfirm = async (email: string) => {
    if (selectedContract && selectedContract.email === email) {
      try {
        await deleteContract(selectedContract.user_id);
        setContracts((prevContracts) =>
          prevContracts.filter((c) => c.user_id !== selectedContract.user_id)
        );
        setModalOpen(false); // モーダルを閉じる
      } catch (error) {
        // エラー処理
      }
    }
  };

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

  // モーダルを閉じる
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContract(undefined);
    if (deleteSuccessMessage) {
      return <SuccessToast message={deleteSuccessMessage} />;
    }
  };

  if (contractIsLoading || deleteIsLoading) {
    return <Loading />;
  }

  if (fetchErrorMessage) {
    return <ErrorToast message={fetchErrorMessage} />;
  }

  if (deleteErrorMessage) {
    <ErrorToast message={deleteErrorMessage} />;
  }

  if (deleteSuccessMessage) {
    <SuccessToast message={deleteSuccessMessage} />;
  }

  return (
    <>
      {deleteSuccessMessage && <SuccessToast message={deleteSuccessMessage} />}
      {deleteErrorMessage && <ErrorToast message={deleteErrorMessage} />}
      {fetchErrorMessage && <ErrorToast message={fetchErrorMessage} />}
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
                {localStorageUserId !== contract.user_id.toString() && (
                  <IconButton
                    aria-label="Delete contract"
                    icon={<DeleteIcon />}
                    onClick={() => {
                      setSelectedContract(contract);
                      setModalOpen(true);
                    }}
                  />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {selectedContract && (
        <DeleteContractModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onDelete={() => handleDeleteConfirm(selectedContract.email)}
          confirmText={selectedContract.email}
          placeholder={selectedContract.email}
        />
      )}
    </>
  );
}
