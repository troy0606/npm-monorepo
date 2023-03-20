import { AxiosResponse } from "axios";
import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

interface IProps<T> {
  promiseDataFn: () => Promise<AxiosResponse<T>>;
  children: (props: IChildren<T>) => React.ReactElement;
}

interface IChildren <T> {
  loading: boolean,
  data: T | null,
  error: Error | null,
}

function LoadingWrap <T>({ children, promiseDataFn }: IProps<T>) {
  const dispatch = useDispatch();
  const [promiseState, setPromiseState] = useState<IChildren<T>>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    getPromiseData();
  }, []);

  const getPromiseData = async () => {
    const promiseStateCopy: IChildren<T> = {
      loading: true,
      data: null,
      error: null,
    };
    try {
      const response = await promiseDataFn();
      promiseStateCopy.data = response.data;
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      promiseStateCopy.loading = false;
    }
    setPromiseState(promiseStateCopy);
  };

  // const counter = useSelector(state => state.counter)

  // const childrenWithProps = Children.toArray(children).map((child) =>
  //   isValidElement<{ promiseData: unknown }>(child)
  //     ? cloneElement(child, {promiseData: promiseState.data})
  //     : child
  // );

  const LoadingEffect = <h2>Loading....</h2>;
  return promiseState?.loading ? LoadingEffect : children(promiseState);
};

export default LoadingWrap;
