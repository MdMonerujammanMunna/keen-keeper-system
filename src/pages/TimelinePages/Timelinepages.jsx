import React from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
const Timelinepages = () => {
    return (
        <>
            <div className="bg-[#F8FAFC] py-20">
                <div className="w-11/12 mx-auto ">
                    <h1 className='text-5xl font-bold mb-6'>Timeline </h1>
                    <div className="bg-white p-4 rounded-lg shadow-xl">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-[#1F2937]">
                                <LuPhoneCall className='text-[32px]' />
                                <div className="">
                                    <h1 className='text-[18px] font-normal text-[#64748B]'><span className='text-xl font-medium text-[#244D3F]'>Meetup </span>with Name of some</h1>
                                    <p className='text-[#64748B] font-medium'>Jan 30,2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timelinepages;   