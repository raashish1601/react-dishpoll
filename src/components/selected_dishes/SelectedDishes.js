import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

function SelectedDishes() {
  const navigate = useNavigate();
  const { votes } = useContext(Context);
  const decsendingVotes = votes.reverse();
  console.log(decsendingVotes);
  return (
    <div className="row d-flex align-items-center flex-column">
      <div className="my-5 col-sm-5 col-md-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Dish Name</th>
            </tr>
          </thead>
          <tbody>
            {decsendingVotes.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{decsendingVotes.length - index}</th>
                  <td>{item}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-warning"
        style={{ width: "140px" }}
        onClick={() => navigate("/main")}
      >
        Go back
      </button>
    </div>
  );
}

export default SelectedDishes;
