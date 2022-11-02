import React, { createContext, useEffect, useReducer, useState } from "react";
import dishesReducer from "../reducer/dishesReducer";
import votesReducer from "../reducer/votesReducer";

export const Context = createContext();

const fetchFn = () => {
  return fetch(
    "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
  ).then((res) => res.json());
};

function Provider({ children }) {
  const [dishes, dishesDispatch] = useReducer(dishesReducer, []);
  // const [dishes, setDishes] = useState([]);

  const [votes, votesDispatch] = useReducer(votesReducer, []);

  useEffect(() => {
    fetchFn().then((data) => {
      const copy = dishes.slice();
      data.map((item) => {
        copy.push({
          id: item.id,
          name: item.dishName,
          description: item.description,
          noRank: false,
          r1: false,
          r2: false,
          r3: false
        });
      });

      dishesDispatch({ type: "ADD_DISHES", payLoad: copy });
    });
  }, []);

  return (
    <Context.Provider value={{ dishes, votes, dishesDispatch, votesDispatch }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
