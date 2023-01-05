import React, { useState } from "react";
import Todo from "../components/Todo";
import Inputbox from "../components/Inputbox";
import Layout from "../components/Layout";
import "../App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import { addTodo, deleteTodo, toggleTodo } from "../redux/modules/todos";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { timeSum } from "../redux/modules/timecost";
const TodoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
`;
const TodoText = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ListContainer = styled.div`
  padding: 0 24px;
`;

const Home = () => {
  const dispatch = useDispatch(); // store 값을 수정하기 위한 dispatch 선언
  const todolist = useSelector((state) => state.todos.todolist); //state(store)에 있는 todos라는 모듈의 todolist값을 고름
  const [title, setTitle] = useState("");
  const [content, setConTent] = useState("");
  const [timecost, setTimeCost] = useState("");
  // const [num, setNum] = useState(6);
  const addTodoHandler = (e) => {
    // 초기값0 안되게
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "" || !(timecost >= 0))
      //음수값 막음
      return;
    const todo = {
      // id: num + 1,
      id: nanoid(),
      title: title,
      content: content,
      isDone: false,
      timecost: timecost,
    };
    // 입력값 초기화
    setTitle("");
    setConTent("");
    setTimeCost("");
    // setNum(num + 1);
    dispatch(addTodo(todo));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id)); //module에 있는 함수
  };
  const doneTodoHandler = (id) => {
    dispatch(toggleTodo(id));
    // //여기서 timecost 애다가 값을 넣어주면 됨.
    // console.log(todolist);
    console.log(id);
    let totalcost = 0;

    todolist.forEach((value) => {
      if (value.id === id) {
        value.isDone
          ? (totalcost -= value.timecost * 1)
          : (totalcost += value.timecost * 1);
      }
    });
    todolist.forEach((value) => {
      value.isDone && (totalcost += value.timecost * 1);
    });
    console.log(totalcost);
    dispatch(timeSum(totalcost));
  };

  return (
    <Layout>
      <Inputbox
        title={title}
        content={content}
        timecost={timecost}
        setTitle={setTitle}
        setConTent={setConTent}
        setTimeCost={setTimeCost}
        addTodoHandler={addTodoHandler}
      ></Inputbox>
      <ListContainer>
        <TodoText> Working...🔥</TodoText>
        <TodoWrapper>
          {todolist
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return (
                <Todo
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                  handleDone={doneTodoHandler}
                ></Todo>
              );
            })}
          {/* {todolist.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                  handleDone={doneTodoHandler}
                ></Todo>
              );
            } else {
              return null;
            }
          })} */}
        </TodoWrapper>
        <TodoText> Done...🎉</TodoText>
        <TodoWrapper>
          {todolist
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return (
                <Todo
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                  handleDone={doneTodoHandler}
                ></Todo>
              );
            })}
          {/* {todolist.map((todo) => {
            if (todo.isDone) {
              console.log(todo.id);
              return (
                <Todo
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                  handleDone={doneTodoHandler}
                ></Todo>
              );
            } else {
              return null;
            }
          })} */}
        </TodoWrapper>
      </ListContainer>
    </Layout>
  );
};

export default Home;
