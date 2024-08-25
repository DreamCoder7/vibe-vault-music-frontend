type FormProps<T> = {
  isFormForUpdate?: boolean;
  id?: number;
  data: T | undefined;
  isLoading: boolean;
};

export type { FormProps };
