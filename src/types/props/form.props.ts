type FormProps<T> = {
  isFormForUpdate?: boolean;
  id?: number;
  data: T | undefined;
  isLoading: boolean;
  refetch: () => void;
};

export type { FormProps };
