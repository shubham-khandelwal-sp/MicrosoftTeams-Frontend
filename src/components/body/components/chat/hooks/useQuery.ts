//libs
import { useCallback, useEffect, useState } from "react";

//constants
import { STATUS } from "../constants/constants";

export type QueryResult<TData> = {
  data: TData | undefined;
  loading: boolean;
  error: Error | undefined;
  updateQuery: (newData: TData | undefined) => void;
};

type QueryState<TData> = {
  status: string;
  data: TData | undefined;
  error: Error | undefined;
};

export const useQuery = <TData>(
  asyncFunc: (asyncFuncParams: string) => Promise<Response>,
  asyncFuncParams: string,
  skip: boolean
) => {
  const [state, setState] = useState<QueryState<TData>>({
    status: STATUS.IDLE,
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    //to ignore network request
    let ignore = false;
    if (skip || ignore) return;
    setState((state: QueryState<TData>) => {
      return {
        ...state,
        status: STATUS.LOADING,
      };
    });
    asyncFunc(asyncFuncParams)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((json) => {
        setState((state: QueryState<TData>) => {
          return {
            ...state,
            status: STATUS.SUCCESS,
            data: json,
          };
        });
      })
      .catch((err) => {
        setState((state: QueryState<TData>) => {
          return {
            ...state,
            status: STATUS.ERROR,
            error: err || new Error("Can't fetch the data"),
          };
        });
      });
    return () => {
      ignore = true;
    };
  }, [skip, asyncFuncParams, asyncFunc]);

  const updateQuery = useCallback((newData: TData | undefined) => {
    setState((state: QueryState<TData>) => {
      return {
        ...state,
        status: STATUS.SUCCESS,
        data: newData,
      };
    });
  }, []);

  return {
    data: state.data,
    loading: state.status === STATUS.LOADING,
    error: state.error,
    updateQuery,
  };
};
