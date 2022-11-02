import React, { useContext } from "react";
import { Context } from "../../context/Context";
import DishesList from "./DishesList";
import "./dishes.css";
import Header from "./Header";

function Dishes() {
  const { dishes } = useContext(Context);

  return (
    <>
      <Header />
      <div className="dishes-container container">
        <div className="row justify-content-center">
          {dishes &&
            dishes.map((item, index) => {
              return <DishesList item={item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Dishes;
