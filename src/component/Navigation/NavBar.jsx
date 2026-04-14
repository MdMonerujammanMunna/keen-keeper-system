import { RiHome2Line } from "react-icons/ri";
import { TfiTimer } from "react-icons/tfi";
import { ImStatsDots } from "react-icons/im";
import NavImg from '../../assets/logo.png'
import { Link, NavLink } from "react-router";
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <Link to='/' className="navbar-start ">
                    <img src={NavImg} alt="" />
                </Link>
                <div className="navbar-end ">
                    <NavLink to="/" className="btn rounded-none rounded-l-md flex items-center outline-none border-none shadow-none text-[#64748B]">
                        <RiHome2Line className="font-bold text-xl " />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to='/TImeline' className="btn rounded-none flex items-center outline-none border-none shadow-none text-[#64748B]">
                        <TfiTimer className="font-bold text-xl " />
                        <span>Timeline</span>
                    </NavLink>
                    <NavLink to='/States' className="btn rounded-none rounded-r-md flex items-center outline-none border-none shadow-none text-[#64748B]">
                        <ImStatsDots className="font-bold text-xl" />
                        <span>State</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default NavBar;