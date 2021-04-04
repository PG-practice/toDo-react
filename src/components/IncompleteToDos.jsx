import React from "react";

export const IncompleteToDos = (props) => {
  const { toDos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p class="title">未完了のTODO</p>
      <ul>
        {toDos.map((toDo, index) => {
          return (
            <div key={toDo} className="list-row">
              <li>{toDo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
