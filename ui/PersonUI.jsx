import React from 'react';
import { Link } from 'react-router';

const PersonUI = ({ Value }) => {
    return (
        <>
            <Link to="/FriendDetails" className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={Value.picture}
                        alt="Shoes"
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{Value.name}</h2>
                    <p className='text-[12px] text-[#64748B]'>{Value.days_since_contact}d ago</p>
                    <div className="flex gap-2">
                        {Value.tags.map(tag =>
                            <>
                                <p className='text-[#244D3F] bg-[#CBFADB] text-[12px] font-medium px-2 py-1.5 rounded-full uppercase'>{tag}</p>
                            </>
                        )}
                    </div>
                    <div className="">
                        <p className={`${Value.status == "almost due" ? "text-white bg-[#EFAD44]" : Value.status == "on-track" ? "text-[#ffffff] bg-[#244D3F]" : "text-[#ffffff] bg-[#EF4444]"} text-[12px] font-medium px-2 py-1.5 rounded-full uppercase`}>{Value.status}</p>
                    </div>
                </div>
            </Link >
        </>
    );
};

export default PersonUI;