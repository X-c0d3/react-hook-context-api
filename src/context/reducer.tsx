const reducer = (stage, action) => {
  switch (action.type) {
    case "REMOVE":
      return {
        ...stage,
        items: stage.items.filter(item => item !== action.payload)
      };
    case "ADD":
      return {
        ...stage,
        items: [...stage.items, action.payload]
      };
    default:
      return {
        stage
      };
  }
};

export default reducer;
