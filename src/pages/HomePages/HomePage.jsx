
import HomeCard from '../../component/HomeCard/HomeCard';
import { useLoaderData } from 'react-router';
import PersonUI from '../../../ui/PersonUI';
import { Suspense, useEffect, useState } from 'react';
const HomePage = () => {
    const [Loading, setLoading] = useState(true)
    const FatchData = useLoaderData()

    useEffect(() => {
        if (FatchData) {
            setLoading(false);
        }
    }, [FatchData]);
    return (
        <>
            <div className="bg-[#F8FAFC] py-20">
                <div className=" w-11/12 mx-auto ">
                    <HomeCard FatchData={FatchData}></HomeCard>
                    <h1 className='font-semibold text-2xl mb-4'>Your Friends</h1>
                    {(Loading == true) ?
                        <>
                            <div className="flex justify-center items-center">
                                <span className="loading loading-infinity w-25"></span>
                            </div>
                        </>
                        :
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {FatchData.map((Value) => <PersonUI key={Value.id} Value={Value}></PersonUI>)}
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default HomePage;