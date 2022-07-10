import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "../reducers/dashreducer";

const Dashprov = createContext();
export function Dashprovider({ children }) {
  const [state, dispatch] = useReducer(reducer, { first: 1, sview: true });
  return (
    <Dashprov.Provider value={{ state, dispatch }}>
      {children}
    </Dashprov.Provider>
  );
}
export function useDash() {
  return useContext(Dashprov);
}
