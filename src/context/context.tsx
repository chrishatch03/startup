import React, { createContext, useReducer } from 'react';

const initialState = {
  user: true,
  tasks: [],
  roles: [],
  goals: [],
  dreams: [],
  study: [],
  studyFuture: [],
  missState: [],
  notes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_GOALS':
      return { ...state, goals: action.payload };
    case 'SET_DREAMS':
      return { ...state, dreams: action.payload };
    case 'SET_STUDY':
      return { ...state, study: action.payload };
    case 'SET_STUDY_FUTURE':
      return { ...state, studyFuture: action.payload };
    case 'SET_MISS_STATE':
      return { ...state, missState: action.payload };
    case 'SET_NOTES':
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };