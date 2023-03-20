import React from "react";
import { apiGetToDoListData, apiGetToDoData } from "../../../api/apiCall";
import LoadingWrap from "../../components/enhancer/LoadingWrap";
import Todo from "../../components/Todo";
import TodoList from "../../components/TodoList";



export default function Index() {
  return (
    <>
      <LoadingWrap promiseDataFn={apiGetToDoListData}>
        {/* <TodoList /> */}
        {promiseData => (
          <TodoList data={promiseData.data}/>
        )}
      </LoadingWrap>
      <LoadingWrap promiseDataFn={apiGetToDoData(1)}>
        {promiseData => (
          <Todo data={promiseData.data}/>
        )}
      </LoadingWrap>
    </>
  );
}
