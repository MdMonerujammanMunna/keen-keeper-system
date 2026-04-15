import React, { useContext } from 'react';

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
                        {AllSelectedData.map((Timer, index) => <TimlineUI key={index} Timer={Timer}></TimlineUI>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timelinepages;   