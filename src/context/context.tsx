import { createContext } from "react";

type DefaultTypeContext = {
  items: [{}];
  remove(item: any): void;
  add(item: any): void;
};

const Context = createContext<DefaultTypeContext>({
  items: [{}],
  remove: () => {},
  add: () => {}
});

export default Context;
