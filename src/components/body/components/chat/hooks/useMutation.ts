//libs
import { useCallback, useState } from "react";

//constants
import { STATUS } from "../constants/constants";

type StatusProps = {
  status: string;
  data: any;
  error: Error | undefined;
};

type MutationConfig<TMutation> = {
  onSuccess: (data: TMutation) => void;
};

const initialState : StatusProps = {
   status: STATUS.IDLE,
   data: undefined,
   error: undefined
}

export const useMutation = <TMutation>(url: string, config: MutationConfig<TMutation>) => {
  const [state, setState] = useState<StatusProps>(initialState);

  const mutate = useCallback(
    (payload: TMutation) => {
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
            throw new Error('Error from backend');
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
