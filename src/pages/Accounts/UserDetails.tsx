import React from 'react'
import ProfileFieldCard from '../../customer/components/ProfileFieldCard'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10 '>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>Persional Details</h1>

            </div>
            <div className='space-y-3'>
                 <ProfileFieldCard keys='Name' value='ManhMT2'/>
                 <ProfileFieldCard keys='Email' value='manhmt@gamil.com'/>
                <ProfileFieldCard keys='Mobile' value='0123456789'/>
            </div>
        </div>
    </div>
  )
}

export default UserDetails