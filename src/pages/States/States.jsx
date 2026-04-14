import React from 'react';
import { Bar, Legend, Pie, PieChart, Tooltip } from 'recharts';

const States = () => {
    const data = [
        { name: 'Text', value: 3, fill: '#7E35E1' },
        { name: 'Call', value: 3, fill: '#244D3F' },
        { name: 'Video', value: 3, fill: '#37A163' },
    ];
    return (
        <>
            <div className="bg-[#F8FAFC] py-20">
                <div className="pb-6 w-11/12 mx-auto">
                    <h1 className='text-[#1F2937] font-bold text-2xl rounded-sm md:text-[2rem] lg:text-[3rem] bg-white  py-2 pl-4'>Friendship Analytics</h1>
                </div>
                <div className=" p-8  w-11/12 mx-auto bg-white rounded-xl">
                    <h1 className='text-xl font-semibold mb-6'>By Interaction Type</h1>
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
                </div>
            </div>
        </>
    );
};

export default States;