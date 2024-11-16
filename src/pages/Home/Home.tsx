import React from 'react'
import ShoesCategory from './ShoesCategory/ShoesCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from '../../ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'

const Home = () => {
  return (
    <>
        <div className='space-y-5 lg:spacae-y-10 relative pb-20'>
            <ShoesCategory/>
            <CategoryGrid/>
          

            <div className='pt-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>
                TODAY'S DEAL
              </h1>
              <Deal/>
            </div>

            <section className='py-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>
                SHOP BY CATEGORY
              </h1>
              <ShopByCategory/>
            </section>

            <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
                <img className='w-full h-full' src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/462551825_1417044722587803_8074949356474300837_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHG5O8ccKLU1RFEi-XTYaupmxepjVUe-J2bF6mNVR74nQNYPLNOQl533HkcZN07voMT5SNl56ABa0-Sv5spHhF4&_nc_ohc=m35DZojVU5EQ7kNvgGQfCNe&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&oh=03_Q7cD1QHkFdMxU3OwAs3wzFQX0hKuZ2F_0ajiANQdaBHIF5LOfw&oe=675B0327" alt="" />
                <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
                  <h1>Shop Now !!!</h1>
                  <p className='text-lg md:text-2xl'>With <span className='logo'>ManhMT2</span></p>

                  <div>
                    <Button startIcon={<Storefront/>} variant='contained' size='large'>
                      Shop Now!!!!
                    </Button>
                  </div>
             

                </div>
            </section>
           


        </div>
    </>
  )
}

export default Home