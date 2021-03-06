import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
