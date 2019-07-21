import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";

const Stage = props => {
  const initialStage = {
    items: ["item1", "item2", "item3", "item4"]
  };

  const [state, dispatch] = useReducer(reducer, initialStage);
  const remove = item => {
    dispatch({
      type: "REMOVE",
      payload: item
    });
  };

  const add = item => {
    dispatch({
      type: "ADD",
      payload: item
    });
  };

  return (
    <div>
      <Context.Provider value={{ items: state.items, remove, add }}>
        {props.children}
      </Context.Provider>
    </div>
  );
};

export default Stage;
