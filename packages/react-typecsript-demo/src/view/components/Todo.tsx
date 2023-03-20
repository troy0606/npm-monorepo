import React, { ReactElement } from "react";
import { ITodo } from "../../redux/todos";

interface IProps {
  data: ITodo | null;
}

const TodoList: React.FC<IProps> = (props): JSX.Element => {
  // 方法一定要定義返回的型別
  // typescript可以在型別推斷的時候協助檢查
  const renderData = (): JSX.Element | ReactElement => {
    let { data } = props;

    return data ? (
      <p key={data.id}>
        <p>{data.userId}</p>
        <p>{data.title}</p>
        <p>
          <input
            type="checkbox"
            name={`${data.id}`}
            id=""
            checked={data.completed}
            title={`${data.title}`}
          />
        </p>
      </p>
    ) : (
      <p>No Content</p>
    );
  };
  return (
    <>
      <h3>API Data After Loading Effect</h3>
      <div>{renderData()}</div>
    </>
  );
};

export default TodoList;
