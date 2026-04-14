import React from 'react';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useLoaderData, useParams } from 'react-router';


const FriendDetails = () => {
    const FatchData = useLoaderData() //All data
    const { PersonID } = useParams() //Click data

    const SelectedPersone = FatchData.find((Person) => Person.id == PersonID)
    return (
        <>
            <div className="grid lg:grid-cols-5 bg-[#F8FAFC] py-20 px-10 gap-6 ">
                <div className="lg:col-span-2 ">
                    {/* Person details */}
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={SelectedPersone.picture}
                                alt="Shoes"
                                className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{SelectedPersone.name}</h2>
                            <div className="">
                                <p className={`${SelectedPersone.status == "almost due" ? "text-white bg-[#EFAD44]" : SelectedPersone.status == "on-track" ? "text-[#ffffff] bg-[#244D3F]" : "text-[#ffffff] bg-[#EF4444]"} text-[12px] font-medium px-2 py-1.5 rounded-full uppercase`}>{SelectedPersone.status}</p>
                            </div>
                            <div className="flex gap-2">
                                {SelectedPersone.tags.map((tag) =>
                                    <>
                                        <p className='text-[#244D3F] bg-[#CBFADB] text-[12px] font-medium px-2 py-1.5 rounded-full uppercase'>{tag}</p>
                                    </>
                                )}
                            </div>
                            <p className='font-medium max-w-88 text-center text-[#64748B]'>" {SelectedPersone.bio} "</p>
                            <p className='text-xs text-center text-[#64748B]'>Preferred: {SelectedPersone.email}</p>
                        </div>
                    </div>
                    {/* snooze button */}
                    <div className="card bg-base-100 shadow-sm mt-5">
                        <div className="py-4 flex items-center justify-center gap-0.5 text-[#1F2937]">
                            <HiOutlineBellSnooze className='font-extrabold text-[22px]' />
                            <h2 className='font-medium'>Snooze 2 weeks</h2>
                        </div>
                    </div>
                    {/* Archive button */}
                    <div className="card bg-base-100 shadow-sm mt-5">
                        <div className="py-4 flex items-center justify-center gap-4 text-[#1F2937]">
                            <PiArchiveBold className='font-extrabold text-[22px]' />
                            <h2 className='font-medium'>Archive</h2>
                        </div>
                    </div>
                    {/* Delete button */}
                    <div className="card bg-base-100 shadow-sm mt-5">
                        <div className="py-4 flex items-center justify-center gap-4 text-[#EF4444]">
                            <RiDeleteBinLine className='font-extrabold text-[22px]' />
                            <h2 className='font-medium'>Delete</h2>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    {/* Days,Goal , Due */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card bg-base-100 shadow-sm">
                            <div className="px-4 py-8 text-center">
                                <h2 className='mb-2 text-3xl font-semibold text-[#244D3F]'>{SelectedPersone.days_since_contact}</h2>
                                <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="px-4 py-8 text-center">
                                <h2 className='mb-2 text-3xl font-semibold text-[#244D3F]'>{SelectedPersone.goal}</h2>
                                <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="px-4 py-8 text-center">
                                <h2 className='mb-2 text-3xl font-semibold text-[#244D3F]'>{SelectedPersone.next_due_date}</h2>
                                <p className='text-[18px] text-[#64748B]'>Next Due</p>
                            </div>
                        </div>
                    </div>
                    {/* Relationship Goal */}
                    <div className="card bg-base-100 shadow-sm mt-6 p-6">
                        <div className="flex justify-between  mb-4">
                            <h1 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h1>
                            <button className='btn'>Edit</button>
                        </div>
                        <div className="">
                            <p>Connect every <span className='text-[18px] font-bold'>{SelectedPersone.goal} days</span></p>
                        </div>
                    </div>
                    {/* Quick Check-In */}
                    <div className="card bg-base-100 shadow-sm mt-6 p-6">
                        <h1 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h1>
                        <div className="mt-4 grid grid-cols-3  gap-4">
                            <div className="text-[#1F2937] bg-base-300 py-4 flex items-center flex-col rounded-lg text-center cursor-pointer">
                                <LuPhoneCall className='text-4xl font-bold mb-2' />
                                <p className='text-[18px]'>Call</p>
                            </div>
                            <div className="text-[#1F2937] bg-base-300 py-4 flex items-center flex-col rounded-lg text-center cursor-pointer">
                                <MdOutlineTextsms className='text-4xl font-bold mb-2' />
                                <p className='text-[18px]'>Text</p>
                            </div>
                            <div className="text-[#1F2937] bg-base-300 py-4 flex items-center flex-col rounded-lg text-center cursor-pointer">
                                <LuVideo className='text-4xl font-bold mb-2' />
                                <p className='text-[18px]'>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FriendDetails;