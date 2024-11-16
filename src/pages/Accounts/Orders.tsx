import React from 'react'
import OrderItems from './OrderItems'

const Orders = () => {
  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5 '>
        <h1 className='font-semibold '>All Orders</h1>
        <p>From anytime</p>
      </div>
      <div className='space-y-2'>
        {[1,1,1,1,1,1,1,1,1].map((item)=><OrderItems/>)}
      </div>
    </div>
  )
}

export default Orders