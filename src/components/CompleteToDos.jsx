import React from "react";

export const CompleteToDos = (props) => {
  const { toDos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p class="title">完了のTODO</p>
      <ul>
        {toDos.map((toDo, index) => {
          return (
            <div key={toDo} className="list-row">
              <li>{toDo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
