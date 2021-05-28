import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../actions/cgpaAction";

function DataList() {
  const state = useSelector((state) => state.cgpaReducer.list);
  const credit = state.map((credit) => parseInt(credit.creadit));
  const totalCredit = credit.reduce((acc, item) => (acc += item), 0);

  const sgpa = state.map((credit) => parseFloat(credit.sgpa));
  const totalSgpa = sgpa.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total = (totalSgpa / state.length).toFixed(2);

  const dispatch = useDispatch();

  return (
    <>
      {Object.keys(state).length === 0 ? null : (
        <div className="mt-4 total-box">
          <h4>completed credit : {totalCredit}</h4>
          <h4>your cgpa : {total}</h4>
        </div>
      )}
      {Object.keys(state).length === 0 ? null : (
        <div className="container mt-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">credit</th>
                <th scope="col">sgpa</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            {state.map((data) => (
              <tbody>
                <tr key={data.id}>
                  <th scope="row"> {data.no} </th>
                  <td> {data.creadit} </td>
                  <td>{data.sgpa}</td>
                  <td>
                    <i
                      className="fas fa-trash-alt"
                      style={{ color: "crimson", cursor: "pointer" }}
                      onClick={() => dispatch(deleteData(data.id))}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
}

export default DataList;
