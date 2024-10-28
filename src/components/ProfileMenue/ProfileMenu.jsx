import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
const ProfileMenu = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const navigate = useNavigate();
    const dipsatch = useDispatch();


    const handleProfile = () => {
        navigate("/profile")
    }
    const handleLogout = () => {
        dipsatch(logout());
        navigate("/login");
    }
    return (
        <div className="relative inline-block z-20">
            <button
                className="text-red-500 px-6 py-2 border-2 border-[#007E8F] rounded-md"
                onClick={toggleDropdown}
            >
                User
            </button>
            {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <ul className="py-2 text-gray-700 bg-black">
                        <li className="px-4 py-2  hover:text-white text-white  cursor-pointer text-center font-medium">

                            <button
                                className="px-6 py-2 border-2 border-[#007E8F] hover:bg-orange-500 hover:text-white    rounded-md w-full text-red-400"
                                onClick={handleProfile}
                            >
                                Profile
                            </button>

                        </li>
                        <li className="px-4 py-2  cursor-pointer">


                            <button
                                className="px-6 py-2 border-2 border-[#007E8F]  hover:bg-orange-500 hover:text-white    rounded-md w-full text-red-400"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu