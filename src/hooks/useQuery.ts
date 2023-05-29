//libs
import { useCallback, useEffect, useState } from "react";

//constants
import { STATUS } from "../Constants/constants";


type statusProps = {
  status: string;
  data: any; // Generic
  error: Error | undefined;
};

export const useQuery =(
  asyncFunc: (asyncFuncParams: string) => Promise<Response>,
  asyncFuncParams: string,
  skip: boolean
) => {
  const [state, setState] = useState<statusProps>({
    status: STATUS.IDLE,
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    //to ignore network request
    let ignore = false;
    if (skip || ignore) return;
    setState((state) => {
      return {
        ...state,
        status: STATUS.LOADING,
      };
    });
    asyncFunc(asyncFuncParams)
      .then((response) => {
        if (!response.ok) {
          setState((state) => {
            return {
              ...state,
              error: new Error("Error from backend"),
            };
          });
          throw new Error();
        }
        return response.json();
      })
      .then((json) => {
        setState((state) => {
          return {
            ...state,
            status: STATUS.SUCCESS,
            data: json,
          };
        });
      })
      .catch(() => {
        setState((state) => {
          return {
            ...state,
            status: STATUS.ERROR,
            error: new Error("Can't fetch the data"),
          };
        });
      });
    return () => {
      ignore = true;
    };
  }, [skip, asyncFuncParams, asyncFunc]);

  const updateQuery = useCallback((newData:any) => {
    setState((state) => {
      return {
        ...state,
        status: STATUS.SUCCESS,
        data: newData,
      };
    });
  },[]);

  return {
    data: state.data,
    loading: state.status === STATUS.LOADING,
    error: state.error,
    updateQuery,
  };
};
