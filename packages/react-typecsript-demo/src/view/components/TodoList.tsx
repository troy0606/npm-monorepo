import React, { ReactElement } from "react";
import { ITodoList } from "../../redux/todos";

interface IProps {
  data: ITodoList | null;
}

const TodoList: React.FC<IProps> = (props): JSX.Element => {
  // 方法一定要定義返回的型別
  // typescript可以在型別推斷的時候協助檢查
  const renderData = (): Array<JSX.Element> | ReactElement => {
    let { data } = props;

    if(data && data.length > 5) {
      data.length = 5
    }

    return data?.length
      ? data.map((user, index) => (
        <li key={user.id}>
          <p>{user.userId}</p>
          <p>{user.title}</p>
          <p>
            <input
              type="checkbox"
              name={`${user.id}`}
              id=""
              checked={user.completed}
              title={`${user.title}`}
            />
          </p>
        </li>
      ))
      : <p>No Content</p>;
  };
  return (
    <>
    <h3>API Data List After Loading Effect</h3>
    <div>{renderData()}</div>
    </>
  );
};

export default TodoList;
