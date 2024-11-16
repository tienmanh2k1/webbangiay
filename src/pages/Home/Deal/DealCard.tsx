import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
        <img 
        className='border-x-[7px] border-t-[7px] border-red-600 w-full h-[12rem] object-cover object-top'
        src='https://scontent.xx.fbcdn.net/v/t1.15752-9/462567654_581896187625285_5034977927808002081_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHh_2LcRDCSbrbgsP2ip0ACkI57bRejs_yQjnttF6Oz_HCqzhFnv_Sym24epesWBaFqb4Hb-9v6Hm9zIiUYuaPv&_nc_ohc=fotUouYGKTMQ7kNvgFwraLd&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEuIT7-QAsApFe9qYJpZmu_oBmVy6OoIBRZ9vKnuDppcA&oe=675AE03B' alt=''/>
        <div className='border-4 border-black bg-black text-white text-center'>
            <p className='text-lg font-semibold'>Sportswear</p>
            <p className='text-2xl font-bold'>15% OFF</p>
            <p className='text-balance text-lg'>Shop Now</p>
        </div>
    </div>
  )
}

export default DealCard