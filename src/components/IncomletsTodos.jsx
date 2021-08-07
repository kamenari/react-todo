import React from "react";

export const InconmpletTodos = (props) => {
  const { inconmpletTodos, onClickconmplet, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {inconmpletTodos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickconmplet(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
