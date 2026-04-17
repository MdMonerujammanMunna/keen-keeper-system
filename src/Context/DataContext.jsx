import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [AllSelectedData, setAllSelectedData] = useState([])

    const CallButtonfun = (SelectedPersone) => {
        toast.success(`Call with ${SelectedPersone.name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const personWithAction = { ...SelectedPersone, type: "Call" };
        setAllSelectedData([...AllSelectedData, personWithAction])
    }
    const TextButtonfun = (SelectedPersone) => {
        toast.success(`Text with ${SelectedPersone.name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        const personWithAction = { ...SelectedPersone, type: "Text" };
        setAllSelectedData([...AllSelectedData, personWithAction])
    }
    const VideoButtonfun = (SelectedPersone) => {
        toast.success(`Video with ${SelectedPersone.name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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