import { Dispatch, SetStateAction } from "react";
import { MRT_PaginationState } from "material-react-table";

type TableProps<T> = {
  data: Array<T> | undefined;
  pagination: MRT_PaginationState;
  isLoading: boolean;
  totalRow: number;
  setPagination: Dispatch<SetStateAction<MRT_PaginationState>>;
  refetch: () => void;
};

export type { TableProps };
