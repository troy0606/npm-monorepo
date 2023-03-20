import { axiosBase } from "../../api/header";
import { AppDispatch } from "../store";

export const GET_TODO_LIST_DATA = "GET_TODO_LIST_DATA";

export type ITodoList = Array<ITodo>;

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getToDoListData = async (dispatch: AppDispatch) => {
  try {
    const response = await axiosBase.get("todos");
    console.log(response);
  } catch (err) {
    throw err;
  }
};

const initState = {
  todoListData: [] as ITodoList,
};

export function todoState(state = initState, action: any) {
  switch (action.type) {
    case GET_TODO_LIST_DATA: {
      return {
        ...state,
        todoListData: action.payload,
      };
    }
    default:
      return state;
  }
}
