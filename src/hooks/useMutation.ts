//libs
import { useCallback, useState } from "react";

//constants
import { STATUS } from "../Constants/constants";

type statusProps = {
  status: string;
  data: any;
  error: Error | undefined;
};

export const useMutation = <TMutation>(url: string, config: any) => {
  const [state, setState] = useState<statusProps>(() => {
    return { status: STATUS.IDLE, data: undefined, error: undefined };
  });

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
            setState((state) => {
              return {
                ...state,
                status: STATUS.ERROR,
                error: new Error("Error from backend"),
              };
            });
            throw new Error();
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
        .catch(() => {
          setState((state) => {
            return {
              ...state,
              status: STATUS.ERROR,
              error: new Error("can't mutate data"),
            };
          });
        });
    },
    [config, url]
  );

  return {
    mutate,
    newData: state.data,
    status: state.status,
    loading: state.status === STATUS.LOADING,
    error: state.status === STATUS.ERROR,
  };
};
