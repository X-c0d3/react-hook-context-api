import React, { useRef, useContext } from "react";
import Context from "../context/context";

const Additem = () => {
  const context = useContext(Context);
  const { add } = context;
  const item = useRef<any>("");

  const onSubmit = e => {
    e.preventDefault();
    add(item.current.value);
    item.current.value = "";
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={item} type="text" placeholder="Enter your item here" />
    </form>
  );
};

export default Additem;
