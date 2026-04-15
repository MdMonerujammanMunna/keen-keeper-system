import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [AllSelectedData, setAllSelectedData] = useState([])

    const CallButtonfun = (SelectedPersone) => {
        alert("i am button")
        const personWithAction = { ...SelectedPersone, type: "Call" };
        setAllSelectedData([...AllSelectedData, personWithAction])
    }
    const TextButtonfun = (SelectedPersone) => {
        alert("i am text")
        const personWithAction = { ...SelectedPersone, type: "Text" };
        setAllSelectedData([...AllSelectedData, personWithAction])
    }
    const VideoButtonfun = (SelectedPersone) => {
        alert("i am video")
        const personWithAction = { ...SelectedPersone, type: "Video" };
        setAllSelectedData([...AllSelectedData, personWithAction])
    }
    return (
        <DataContext.Provider value={{ AllSelectedData, setAllSelectedData, CallButtonfun, TextButtonfun, VideoButtonfun }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;