import React from "react";

export const ConmpletTodos = (props) => {
  const { conmpletTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {conmpletTodos.map((todo, index) => {
          return (
            <li key={index} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
