import React from 'react';
import FooterLogo from '../../assets/logo-xl.png'
import facebook from '../../assets/facebook.png'
import instragram from '../../assets/instagram.png'
import x from '../../assets/twitter.png'
const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-col gap-6 footer-center bg-[#244D3F] text-primary-content pt-20 px-2 md:px-0">
                <aside className=''>
                    <img src={FooterLogo} alt="" />
                    <p className="mt-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                </aside>
                <nav className=''>
                    <p className='text-xl font-semibold'>Social Links</p>
                    <div className="grid grid-flow-col gap-4">
                        <a href="Facebook">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="Instragram">
                            <img src={instragram} alt="" />
                        </a>
                        <a href="X">
                            <img src={x} alt="" />
                        </a>
                    </div>
                </nav>
                <hr className='w-[60vw] text-[#1A8862]' />
                <div className="md:flex md:gap-[20vw] pb-8">
                    <div className="text-nowrap">
                        <p> © {new Date().getFullYear()} KeenKeeper. All right reserved</p>
                    </div>
                    <div className="">
                        <ul className='flex text-nowrap gap-5'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                            <li><a href="">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;