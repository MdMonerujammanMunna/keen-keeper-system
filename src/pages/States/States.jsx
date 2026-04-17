import React, { useContext } from 'react';
import { Bar, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { DataContext } from '../../Context/DataContext';
import { IoEyeOffOutline } from "react-icons/io5";
const States = () => {
    const call = []
    const Text = []
    const Video = []
    const { AllSelectedData } = useContext(DataContext)
    AllSelectedData.find((item) => {
        if (item.type === "Call") {
            call.push(item)
        }
        else if (item.type === "Text") {
            Text.push(item)
        }
        else if (item.type === "Video") {
            Video.push(item)
        }

    })
    const data = [
        { name: 'Call', value: call.length, fill: '#244D3F' },
        { name: 'Text', value: Text.length, fill: '#7E35E1' },
        { name: 'Video', value: Video.length, fill: '#37A163' }
    ];
    return (
        <>
            <div className="bg-[#F8FAFC] py-20">
                <div className="pb-6 w-11/12 mx-auto">
                    <h1 className='text-[#1F2937] font-bold text-2xl rounded-sm md:text-[2rem] lg:text-[3rem] bg-white  py-2 pl-4'>Friendship Analytics</h1>
                </div>
                <div className=" p-8  w-11/12 mx-auto bg-white rounded-xl">
                    <h1 className='text-xl font-semibold mb-6'>By Interaction Type</h1>
                    {
                        (call.length == 0 && Text.length == 0 && Video.length == 0) ?
                            <>
                                <div className="flex flex-col items-center gap-6 justify-center my-10">
                                    <IoEyeOffOutline className='text-7xl text-[#64748B]' />
                                    <h1 className='text-2xl font-medium text-[#64748B]'>No data Found</h1>
                                </div>
                            </> :
                            <>
                                <div className="flex justify-center">
                                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                        <Pie
                                            data={data}
                                            innerRadius="80%"
                                            outerRadius="100%"
                                            cornerRadius="20%"
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        />
                                        <Tooltip />
                                        <Legend iconType='circle' />
                                    </PieChart>
                                </div>
                            </>
                    }
                </div>
            </div >
        </>
    );
};

export default States;