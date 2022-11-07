import React from 'react';
import Logo from "../logo.svg";

const Profile = ({image_url, username, profile_link}) => {
  return (
    <div className='rounded flex justify-between bg-white shadow-lg px-5 mx-3 my-3 py-4 lg:w-auto w-11/12'>
        <img src={image_url || Logo} alt="" className='rounded-full w-20 h-full'/>
        <div className='text-center my-auto'>
            <p className='text-lg text-black font-semibold'>{username || 'QuincyLarson'}</p>
            <a className='text-sm opacity-70 hover:cursor-pointer hover:text-underline hover:text-blue-300' href={profile_link}>Profile</a>
        </div>
    </div>
  )
}

export default Profile;