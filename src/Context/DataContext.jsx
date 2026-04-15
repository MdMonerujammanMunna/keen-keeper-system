import { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const data = {
        "name": "munna"
    }

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;