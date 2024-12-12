import useSWR from "swr";
import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface UseFetchDataResult<T> {
  data: T | undefined;
  error: string | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

// Custom hook dengan TypeScript
export const useFetchData = <T>(url: string, id: string | null = null): UseFetchDataResult<T> => {
  const {
    data,
    error,
    isLoading: loading,
    mutate,
  } = useSWR<T, AxiosError>(
    id ? `${API_URL}${url}/${id}` : `${API_URL}${url}`,
    fetcher
  );

  const errorMessage = error
    ? "Something went wrong"
    : null;

  const refetch = async () => {
    try {
      await mutate();
    } catch (refetchError) {
      console.error("Error while refetching:", refetchError);
    }
  };

  return { data, error: errorMessage, loading, refetch };
};
