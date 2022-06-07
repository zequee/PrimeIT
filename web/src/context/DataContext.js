import React, { useContext, useReducer } from "react";

const DataContext = React.createContext();

const useDataContext = () => {
  return useContext(DataContext);
};

const initialstate = {
  users: [],
  user: '',
  flag: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD_LIST_USERS": {
      return {
        ...state,
        users: action.value,
      };
    }
    case "ADD_USER": {
      return {
        ...state,
        user: action.value,
      };
    }
    case "CLICK_LIST_USER": {
      return {
        ...state,
        user: action.value,
      };
    }
    case "DELETE_USER": {
      return {
        ...state,
        user: initialstate.user,
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        user: action.value,
      };
    }
    case "RELOAD_LIST_USERS": {
      return {
        ...state,
        flag: action.value,
      };
    }

    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <DataContext.Provider
      value={{
        flagContext: state.flag,
        userContext: state.users,
        userCurrentContext: state.user,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useDataContext };
