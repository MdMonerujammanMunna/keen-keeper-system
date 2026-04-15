import { FaPlus } from "react-icons/fa6";
const HomeCard = () => {
    return (
        <>
            <div className="text-center flex flex-col justify-center items-center">
                <div className="mb-8">
                    <h1 className='text-[#1F2937] font-bold text-[3rem] mb-4'>Friends to keep close in your life</h1>
                    <p className='text-[#64748B] max-w-163'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                </div>
                <div className="">
                    <button className='btn bg-[#244D3F] outline-none border-none shadow-none text-white'>
                        <FaPlus />
                        <span>Add a Friend</span>
                    </button>
                </div>
            </div>
            <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className=" shadow-xl mt-10">
                    <div className="bg-white p-8 text-center rounded-2xl">
                        <h1 className='mb-2 text-3xl font-bold text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>Total Friends</p>
                    </div>
                </div>
                <div className=" shadow-2xl mt-10">
                    <div className="bg-white p-8 text-center rounded-2xl">
                        <h1 className='mb-2 text-3xl font-bold text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>On Track</p>
                    </div>
                </div>
                <div className=" shadow-2xl mt-10">
                    <div className="bg-white p-8 text-center rounded-2xl">
                        <h1 className='mb-2 text-3xl font-bold text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>Need Attention</p>
                    </div>
                </div>
                <div className=" shadow-2xl mt-10">
                    <div className="bg-white p-8 text-center rounded-2xl">
                        <h1 className='mb-2 text-3xl font-bold text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
            </div>
            <hr className='pb-10 mt-10 text-[#E9E9E9]  bg-[#F8FAFC]' />

        </>
    );
};

export default HomeCard;