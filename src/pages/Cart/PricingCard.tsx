import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
      <div className='space-y-3 p-5'>

        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>đ400,000</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Discount</span>
          <span>đ4000</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>đ40,000</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>FlatFrom Fee</span>
          <span>Free</span>
        </div>

       
      </div>
      <Divider/>

<div className='flex justify-between items-center p-5 text-primary-color'>
  <span>Total</span>
  <span>đ499,000</span>
</div>
    </>
  )
}

export default PricingCard