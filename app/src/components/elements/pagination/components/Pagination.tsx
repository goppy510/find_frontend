import { Button, Flex } from "@chakra-ui/react";
import { PaginationType } from '@/components/elements/pagination/types/paginationTypes';

const Pagination: React.FC<PaginationType> = ({ currentPage, hasPrevious, hasNext, onChangePage, totalCount, itemsPerPage }) => {
  const isLastPage = (currentPage * itemsPerPage) >= totalCount;
  
  return (
    <Flex justifyContent="flex-end" mt={4}>
      <div className="flex space-x-6">
        <Button 
          borderRadius="md" 
          borderWidth="1px"
          bg="gray.100"
          color="gray.800"
          fontSize="sm"
          px={3}
          py={1}
          isDisabled={!hasPrevious}
          onClick={() => hasPrevious && onChangePage(currentPage - 1)}
        >
          前のページ
        </Button>
        <Button 
          borderRadius="md" 
          borderWidth="1px"
          bg="gray.100"
          color="gray.800"
          fontSize="sm"
          px={3}
          py={1}
          isDisabled={!hasNext || isLastPage}
          onClick={() => hasNext && onChangePage(currentPage + 1)}
        >
          次のページ
        </Button>
      </div>
    </Flex>
  );
};

export default Pagination;
