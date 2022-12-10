import React from 'react';

const Profile = ({image_url, username, profile_link}) => {
  return (
    
    <div className='rounded flex justify-between bg-white shadow-lg px-6 mx-3 my-3 py-4 lg:w-auto w-11/12'>
        <img src={image_url} alt="" className='rounded-full w-20 h-full'/>
        <div className='text-center my-auto'>
            <p className='text-lg text-black font-semibold'>{username}</p>
            <a className='text-sm opacity-70 hover:cursor-pointer hover:text-underline hover:text-blue-300' href={profile_link}>Profile</a>
        </div>
    </div>
  )
}

export default Profile;