import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

function Result() {
  const navigate = useNavigate();
  const { votes } = useContext(Context);
  return (
    <div className="container col-sm-7 col-md-4">
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Dish Name</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{votes[0]}</td>
            <td>{30}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{votes[1]}</td>
            <td>{20}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{votes[2]}</td>
            <td>{10}</td>
          </tr>
        </tbody>
      </table>

      <div className="btn-container d-flex justify-content-center">
        <button
          className="btn btn-sm btn-warning m-2"
          onClick={() => navigate("/dishes")}
        >
          Go back
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={() => navigate("/main")}
        >
          Main Page
        </button>
      </div>
    </div>
  );
}

export default Result;
