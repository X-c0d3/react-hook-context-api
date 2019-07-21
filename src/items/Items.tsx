import React, { useContext } from "react";
import Context from "../context/context";


const Items = () => {
  const context = useContext(Context);
  const { items, remove } = context;
  return (
    <div style={{marginBottom:10}}>
      <h1>Items</h1>
      <span>Totel : {items.length} items</span>
      {items.map((item, index) => (
        <li key={index} style={{textAlign:"left", marginLeft: 20}}>
          
            <span>  [+{index + 1}] {item}</span>
         
          <a href="#remove"
            style={{marginLeft:"5px"}} 
            onClick={() => remove(item)}>Delete</a>
        </li>
      ))}
    </div>
  );
};

export default Items;
