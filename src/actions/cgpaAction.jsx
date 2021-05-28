import { ADD_DATA, REMOVE_DATA } from "../context/cgpaContext";

export const addData = (no, creadit, sgpa) => {
  return {
    type: ADD_DATA,
    payload: {
      id: new Date().getTime().toLocaleString(),
      no: no,
      creadit: creadit,
      sgpa: sgpa,
    },
  };
};

export const deleteData = (id) => {
  return {
    type: REMOVE_DATA,
    id,
  };
};
