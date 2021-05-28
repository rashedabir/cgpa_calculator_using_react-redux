import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../actions/cgpaAction";

function FormBox() {
  const [no, setNo] = useState("");
  const [creadit, setCreadit] = useState("");
  const [sgpa, setSgpa] = useState("");
  const dispatch = useDispatch();

  const saveData = (e) => {
    e.preventDefault();
    dispatch(addData(no, creadit, sgpa));
    setNo("");
    setCreadit("");
    setSgpa("");
  };
  return (
    <div>
      <form onSubmit={saveData}>
        <input
          className="form-control mb-2"
          placeholder="semester no"
          type="text"
          onChange={(e) => {
            setNo(e.target.value);
          }}
          value={no}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="creadit"
          type="number"
          min="1"
          onChange={(e) => {
            setCreadit(e.target.value);
          }}
          value={creadit}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="SGPA"
          type="number"
          min="1"
          step="any"
          onChange={(e) => {
            setSgpa(e.target.value);
          }}
          value={sgpa}
          required
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default FormBox;
