import { useEffect, useState } from 'react';
import Call from '../src/assets/call.png'
import Text from '../src/assets/text.png'
import Video from '../src/assets/video.png'
const TimlineUI = ({ Timer }) => {

    // console.log(Timer)
    const [CallDate, setCallDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCallDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const RunningDate = CallDate.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: '2-digit'
    });

    // time 
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-xl mb-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-[#1F2937]">
                        <div className="w-8">
                            {Timer.type == "Call" ?
                                <>
                                    <img src={Call} alt="" />
                                </>
                                : Timer.type === "Text" ?
                                    <>
                                        <img src={Text} alt="" />
                                    </>
                                    :
                                    <>
                                        <img src={Video} alt="" />
                                    </>}
                        </div>
                        <div className="">
                            <h1 className='text-[18px] font-normal text-[#64748B]'><span className='text-xl font-medium text-[#244D3F]'>Meetup</span> {Timer.name} </h1>
                            <p className='text-[#64748B] font-medium'>{RunningDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimlineUI;