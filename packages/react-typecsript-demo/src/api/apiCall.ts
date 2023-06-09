import { axiosBase } from "./request";
import { ITodo, ITodoList } from "../redux/todos";

export const apiGetToDoListData = () => axiosBase.get<ITodoList>('todos');

export const apiGetToDoData = (userid: number) => () => axiosBase.get<ITodo>(`todos/${userid}`);