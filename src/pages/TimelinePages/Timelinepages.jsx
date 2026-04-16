import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { DataContext } from '../../Context/DataContext';
import TimlineUI from '../../../ui/TimlineUI';
const Timelinepages = () => {
    const { AllSelectedData } = useContext(DataContext)
    const [SortedSelected, setSortedSelected] = useState("")
    const [FilterData, setFilterData] = useState(AllSelectedData) //for data
    
    //  Sort data
    useEffect(() => {
        if (SortedSelected) {
            if (SortedSelected === "Call") {
                const SortedData = [...AllSelectedData].sort((a, b) => {
                    const List = {
                        "Call": 1,
                        "Text": 2,
                        "Video": 3
                    };

                    const one = List[a.type]
                    const two = List[b.type]

                    return one - two;
                });
                setFilterData(SortedData);
            }
            else if (SortedSelected === "Text") {
                const SortedData = [...AllSelectedData].sort((a, b) => {
                    const List = {
                        "Text": 1,
                        "Call": 2,
                        "Video": 3
                    };

                    const one = List[a.type]
                    const two = List[b.type]

                    return one - two;
                });

                setFilterData(SortedData);
            }
            else if (SortedSelected === "Video") {
                const SortedData = [...AllSelectedData].sort((a, b) => {
                    const List = {
                        "Video": 1,
                        "Call": 2,
                        "Text": 3
                    };

                    const one = List[a.type]
                    const two = List[b.type]

                    return one - two;
                });

                setFilterData(SortedData);
            }
        }
    }, [SortedSelected, AllSelectedData]);
    //  Sort data
    return (
        <>
            <div className="bg-[#F8FAFC] py-20">
                <div className="w-11/12 mx-auto ">
                    <h1 className='text-5xl font-bold mb-6'>Timeline </h1>
                    <div className="">
                        <div className="dropdown dropdown-bottom mb-10 ">
                            <div tabIndex={0} role="button" className="btn bg-white gap-24 text-[18px] text-[#64748B] font-normal">{SortedSelected == "" ? "Filter timeline " : `${SortedSelected}`}<IoIosArrowDown /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[18px] text-[#64748B] font-medium">
                                <li onClick={() => setSortedSelected("Call")}><a>Call</a></li>
                                <li onClick={() => setSortedSelected("Text")}><a>Text</a></li>
                                <li onClick={() => setSortedSelected("Video")}><a>Video</a></li>
                            </ul>
                        </div>
                        {FilterData.map((Timer, index) => <TimlineUI key={index} SortedSelected={SortedSelected} Timer={Timer}></TimlineUI>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timelinepages;   