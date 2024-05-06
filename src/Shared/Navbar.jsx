import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    // console.log('user: ', user);
    // const [photo, setPhoto] = useState()
    // const photo = user.photoURL

    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => {
                console.error(error);
            })
    }

    // // user && setPhoto(user.photoURL)

    // useEffect(() => {
    //     user && setPhoto(user.photoURL)
    // } , [user])


    const link = <>

        <li><NavLink className={({ isActive }) => isActive ? 'text-black border-b-2 border-red-500 font-bold pb-1' : 'text-gray-700 border-gray-900 font-bold'} to='/'>Home</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-black border-b-2 border-red-500 font-bold pb-1' : 'text-gray-700 border-gray-900 font-bold'} to='/about'>About</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-black border-b-2 border-red-500 font-bold pb-1' : 'text-gray-700 border-gray-900 font-bold'} to='/services'>Services</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-black border-b-2 border-red-500 font-bold pb-1' : 'text-gray-700 border-gray-900 font-bold'} to='/blog'>Blog</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-black border-b-2 border-red-500 font-bold pb-1' : 'text-gray-700 border-gray-900 font-bold'} to='/contact'>Contact</NavLink> </li>

        {
            user?.email ?

                <li>
                    <NavLink className={({ isActive }) => isActive ? 'text-black border-b-2 border-red-500 font-bold pb-1' : 'text-gray-700 border-gray-900 font-bold'} to='/bookings'>Bookings</NavLink>
                </li>

                : ""
        }

    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 gap-10">
                        {link}
                    </ul>
                </div>


                <div className="navbar-end gap-6">

                    <div>

                        {
                            user ?

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>

                                :
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src='https://i.ibb.co/9WfLbkH/user.png' />
                                        </div>
                                    </div>
                                </div>


                        }


                    </div>

                    {
                        user ? <Link className="btn btn-secondary" onClick={handleLogOut} to='/'>Logout</Link>
                            :
                            <Link className="btn btn-success" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;