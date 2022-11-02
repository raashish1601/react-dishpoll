import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./dishes.css";

function DishesList({ item }) {
  const { votesDispatch, votes, dishesDispatch } = useContext(Context);

  const handleSelection = (event) => {
    let rank = event.target.textContent;
    if (rank === "Rank 1") {
      votesDispatch({ type: "RANK_1", payLoad: [item.id, item.name] });
      dishesDispatch({ type: "RANK_1", payLoad: item.id });
    } else if (rank === "Rank 2") {
      votesDispatch({ type: "RANK_2", payLoad: [item.id, item.name] });
      dishesDispatch({ type: "RANK_2", payLoad: item.id });
    } else if (rank === "Rank 3") {
      votesDispatch({ type: "RANK_3", payLoad: [item.id, item.name] });
      dishesDispatch({ type: "RANK_3", payLoad: item.id });
    } else {
      votesDispatch({ type: "NO_RANK", payLoad: [item.id, "No Rank"] });
      dishesDispatch({ type: "NO_RANK", payLoad: item.id });
    }
  };

  return (
    <div className="card">
      <div className="card-header bg-dark text-light">
        <h1 className="card-title m-0">{item.name}</h1>
      </div>
      <div className="card-body">
        <ul className="list-group" onClick={handleSelection}>
          <li
            className={item.r1 ? "list-group-item active" : "list-group-item"}
          >
            Rank 1
          </li>
          <li
            className={item.r2 ? "list-group-item active" : "list-group-item"}
          >
            Rank 2
          </li>
          <li
            className={item.r3 ? "list-group-item active" : "list-group-item"}
          >
            Rank 3
          </li>
          <li
            className={
              item.noRank ? "list-group-item active" : "list-group-item"
            }
          >
            No Rank
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DishesList;
