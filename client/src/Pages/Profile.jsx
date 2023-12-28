import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' src={currentUser.avatar} alt="Profile"/>
        <input className='rounded-lg p-3 border' type="text" placeholder='username' id='username'  />
        <input className='rounded-lg p-3 border' type="email" placeholder='email' id='email'  />
        <input className='rounded-lg p-3 border' type="password" placeholder='password' id='password'  />
        <button className='text-white p-3 rounded-lg hover:opacity-80 disabled:70 bg-orange-500' type='submit'>Reset</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Log Out</span>
      </div>
    </div>
  )
}

export default Profile