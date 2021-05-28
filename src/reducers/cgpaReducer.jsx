import { ADD_DATA, REMOVE_DATA } from "../context/cgpaContext";

const initialState = {
  list: [],
};

const cgpaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      const { id, no, creadit, sgpa } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            no: no,
            creadit: creadit,
            sgpa: sgpa,
          },
        ],
      };

    case REMOVE_DATA:
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default cgpaReducer;
