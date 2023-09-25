export type PaginationType = {
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  totalCount: number;
  itemsPerPage: number;
  search?: string;
  onChangePage: (newPage: number) => void;
};
