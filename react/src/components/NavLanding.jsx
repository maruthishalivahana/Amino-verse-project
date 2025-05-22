import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import menu from '/menu.svg'
import { Link } from 'react-router-dom';
import {
    SignedIn,
    SignedOut,
    UserButton,
    SignInButton,
    SignUpButton
} from '@clerk/clerk-react';



function NavLanding() {
    // If you want to use a popup, uncomment the next line:
    // const [showPopup, setShowPopup] = React.useState(false);

    // const handleDemoClick = () => {
    //     setShowPopup(true);
    // };

    return (
        <div className='bg-[#061025] p-4 w-full'>
            <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='text-center sm:text-left'>
                    <p className='text-xl font-semibold text-white'>AminoVerse.</p>
                </div>

                <div className='flex items-center justify-center'>
                    <ul className='flex flex-wrap gap-8 text-[12px] sm:text-[16px] xl:text-[18px] justify-center sm:justify-end items-center'>
                        <li className='capitalize hover:text-blue-200 transition-colors text-white'>home</li>
                        <li className='capitalize hover:text-blue-200 transition-colors text-white'>Features</li>
                        <li className='capitalize hover:text-blue-200 transition-colors text-white'>ContactUs</li>
                        <SignedOut>
                            {console.log("Rendering SignedOut content")}
                            <li>
                                <SignInButton mode="modal" redirectUrl="/home">
                                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors'>
                                        Sign in
                                    </button>
                                </SignInButton>
                            </li>
                            <li>
                                <SignUpButton mode="modal">
                                    <button className='bg-white hover:bg-gray-100 text-blue-600 px-4 py-2 rounded-md transition-colors'>
                                        Sign up
                                    </button>
                                </SignUpButton>
                            </li>
                        </SignedOut>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavLanding
