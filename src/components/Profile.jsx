import React from 'react';
import Logo from "../logo.svg";

const Profile = ({image_url, username, profile_link}) => {
  return (
    <div className='rounded flex justify-between bg-white shadow-sm px-4 py-4 w-auto'>
        <img src={image_url || Logo} alt="" className='rounded-full w-20 h-full'/>
        <div className='text-center'>
            <p className='text-base text-black font-semibold'>{username || 'QuincyLarson'}</p>
            <a className='text-xs opacity-70 hover:cursor-pointer hover:text-underline hover:text-blue-300' href={profile_link}>Profile</a>
        </div>
    </div>
  )
}

export default Profile;