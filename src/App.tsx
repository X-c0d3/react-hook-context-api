import React from "react";
import "./App.css";

import Items from "./items/Items";
import Provider from "./context/Stage";
import AddItem from "./items/additem";

const App: React.FC = () => {
  return (
    <Provider>
      <div className="App">
        <Items />
        <AddItem />
      </div>
    </Provider>
  );
};

export default App;
