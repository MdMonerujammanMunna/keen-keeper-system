import React, { useContext } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { DataContext } from '../../Context/DataContext';
import TimlineUI from '../../../ui/TimlineUI';
const Timelinepages = () => {
    const { AllSelectedData } = useContext(DataContext)
    return (
        <>
            <div className="bg-[#F8FAFC] py-20">
                <div className="w-11/12 mx-auto ">
                    <h1 className='text-5xl font-bold mb-6'>Timeline </h1>
                    <div className="">
                        <div className="dropdown dropdown-bottom mb-10 ">
                            <div tabIndex={0} role="button" className="btn bg-white gap-24 text-[18px] text-[#64748B] font-normal">Filter timeline <IoIosArrowDown /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[18px] text-[#64748B] font-medium">
                                <li><a>Call</a></li>
                                <li><a>Text</a></li>
                                <li><a>Video</a></li>
                            </ul>
                        </div>
                        {AllSelectedData.map((Timer, index) => <TimlineUI key={index} Timer={Timer}></TimlineUI>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timelinepages;   