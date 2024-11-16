import React from 'react'
import ShoesCategoryCard from './ShoesCategoryCard'

const ShoesCategory = () => {
  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
        {[1,1,1,1,1].map((item)=><ShoesCategoryCard/>)}
    </div>
  )
}

export default ShoesCategory