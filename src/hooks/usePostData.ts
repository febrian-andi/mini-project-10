import { useState } from "react";
import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

interface PostDataHook {
  postData: (
    data: any,
    onSuccess?: () => void,
    onError?: (error: string | { [key: string]: string }) => void
  ) => void;
  loading: boolean;
}

export const usePostData = (url: string): PostDataHook => {
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async (
    data: any,
    onSuccess?: () => void,
    onError?: (error: string | { [key: string]: string }) => void
  ) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}${url}`, data);

      if (onSuccess) onSuccess();

    } catch (error: AxiosError | any) {
      if (error.response && error.response.status === 400) {
        const errors: { [key: string]: string } = {};
        error.response.data.data.forEach((err: { path: string; msg: string }) => {
          errors[err.path] = err.msg;
        });
        if (onError) onError(errors);
      } else {
        if (onError) onError(error.message || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading };
};