import { useState, useContext, createContext } from "react";

const ShowFormContext = createContext();

export const useShowFormContext = () => useContext(ShowFormContext);

export default function ShowFormContextProvider({ children }) {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  return (
    <ShowFormContext.Provider value={{ showAddTaskForm, toggleAddTaskForm }}>
      {children}
    </ShowFormContext.Provider>
  );
}
