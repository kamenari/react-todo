import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InconmpletTodos } from "./components/IncomletsTodos";
import { ConmpletTodos } from "./components/ComletsTodos";

export const App = () => {
  const [todoText, settodoText] = useState("");
  const [inconmpletTodos, setinconmpletTodos] = useState([]);
  const [conmpletTodos, setconmpletTodos] = useState([]);

  const onChangeTodoText = (e) => {
    settodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inconmpletTodos, todoText];
    setinconmpletTodos(newTodos);
    settodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inconmpletTodos];
    newTodos.splice(index, 1);
    setinconmpletTodos(newTodos);
  };

  const onClickconmplet = (index) => {
    const newInConmpletTodos = [...inconmpletTodos];
    newInConmpletTodos.splice(index, 1);

    const newConmpletTodos = [...conmpletTodos, inconmpletTodos[index]];
    setinconmpletTodos(newInConmpletTodos);
    setconmpletTodos(newConmpletTodos);
  };

  const onClickBack = (index) => {
    const newConmpletTodos = [...conmpletTodos];
    newConmpletTodos.splice(index, 1);

    const newInConmpletTodos = [...inconmpletTodos, conmpletTodos[index]];
    setconmpletTodos(newConmpletTodos);
    setinconmpletTodos(newInConmpletTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={inconmpletTodos.length >= 5}
      />
      {inconmpletTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで</p>
      )}
      <InconmpletTodos
        inconmpletTodos={inconmpletTodos}
        onClickconmplet={onClickconmplet}
        onClickDelete={onClickDelete}
      />
      <ConmpletTodos conmpletTodos={conmpletTodos} onClickBack={onClickBack} />
    </>
  );
};
