//libs
import { useCallback, useState } from "react";

//constants
import { STATUS } from "../constants/constants";

type StatusProps<TData> = {
  status: string;
  data: TData | undefined;
  error: Error | undefined;
};

type MutationConfig<TPayload> = {
  onSuccess: (data: TPayload) => void;
};

const initialState = {
  status: STATUS.IDLE,
  data: undefined,
  error: undefined,
};

export const useMutation = <TPayload>(
  url: string,
  config: MutationConfig<TPayload>
) => {
  const [state, setState] = useState<StatusProps<TPayload>>(initialState);

  const mutate = useCallback(
    (payload: TPayload) => {
      setState((state) => {
        return {
          ...state,
          status: STATUS.LOADING,
        };
      });
      fetch(url, {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error from backend");
          }
          return response.json();
        })
        .then((response) => {
          config?.onSuccess?.(response);
          setState((state) => {
            return {
              ...state,
              data: response,
              status: STATUS.SUCCESS,
            };
          });
        })
        .catch((err) => {
          setState((state) => {
            return {
              ...state,
              status: STATUS.ERROR,
              error: err || new Error("can't mutate data"),
            };
          });
        });
    },
    [config, url]
  );

  return {
    mutate,
    data: state.data,
    status: state.status,
    loading: state.status === STATUS.LOADING,
    error: state.error,
  };
};
