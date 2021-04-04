import React, { useEffect, useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteToDos } from "./components/IncompleteToDos";
import { CompleteToDos } from "./components/CompleteToDos";

export const App = () => {
  const [toDoText, setToDoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState(["aaaa", "iiii"]);
  const [completeToDos, setCompleteToDos] = useState(["uuuu", "eeee"]);

  const onChangeToDoText = (event) => {
    setToDoText(event.target.value); // eventのどのプロパティに値が入るかとかは覚える
  };

  const onClickAdd = () => {
    if (toDoText === "") return;
    const newTodos = [...incompleteToDos, toDoText];
    setIncompleteToDos(newTodos);
    setToDoText("");
  };

  const onClickDelete = (index) => {
    const newToDos = [...incompleteToDos];
    newToDos.splice(index, 1);
    setIncompleteToDos(newToDos);
  };

  const onClickComplete = (index) => {
    const newIncompleteToDos = [...incompleteToDos];
    newIncompleteToDos.splice(index, 1);

    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];

    setIncompleteToDos(newIncompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  const onClickBack = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);

    const newIncompleteToDos = [...incompleteToDos, completeToDos[index]];
    setCompleteToDos(newCompleteToDos);
    setIncompleteToDos(newIncompleteToDos);
  };

  return (
    <>
      <InputTodo
        toDoText={toDoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
      />

      <IncompleteToDos
        toDos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteToDos toDos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
