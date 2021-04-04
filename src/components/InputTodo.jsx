import React from "react";

// CSSでは-繋ぎのところをキャメルケースに直す
// オブジェクト化するために""をつける
// 行末の;は,にする
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { toDoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="ToDoを入力" value={toDoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
