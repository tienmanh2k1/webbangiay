import React from 'react'
import './ShopByCategory.css'

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
        <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color '>
            <img 
            className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
            src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/462535578_1091832485989613_7706412801719054194_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFE8dCCBcwIWSsSKtePo83W4MgOkQpM2sDgyA6RCkzawJwyKeO9O4Z-2zt8Kpyw82t0imYxvrzQnpmQbaCqwJkg&_nc_ohc=HTugL80A5-wQ7kNvgFigVKp&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&oh=03_Q7cD1QF5Ar70YByNxXobQ432haCtJ9bP-hbVdMLoG35sxU2GnQ&oe=675ACB73" alt="" />
        </div>
        <h1>SKY VHD</h1>
    </div>
  )
}

export default ShopByCategoryCard