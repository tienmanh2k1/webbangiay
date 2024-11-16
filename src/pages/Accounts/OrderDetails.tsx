import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentsIcon from '@mui/icons-material/Payments';
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
    const navigate=useNavigate();

  return (
    <div>
        <Box className='space-y-5'>
            <section className='flex flex-col gap-5 justify-center items-center'>
                <img className='w-[100px]' src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/466868811_1004122431730495_1122637728812206316_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcstoFYHDVelWM2xxnTyTVbZsbsAa77qZtmxuwBrvuphp_zZT6x0aXM025YkalX07BCcFD6F_j3YkHW4LdAhbM&_nc_ohc=Z3VqFZo9ONAQ7kNvgEOC9tJ&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=A948lpQLie9w9Mtnau6TB2S&oh=00_AYB4ZAtbbl846asBFGivrA7-VDiNwdymjtj5nxn3qJsQHg&oe=673EB00B' alt=''/>

                <div className='text-sm space-y-1 text-center'>
                    <h1 className='font-bold'>{"GIAY SKY2 VHD"}</h1>
                    <p>Với thiết kế hiện đại và tinh tế, áo VHD không chỉ phù hợp cho các hoạt động thể thao, dạo phố mà còn dễ dàng kết hợp với nhiều phong cách thời trang khác nhau. Áo giữ được form dáng đẹp, không bị xù lông sau nhiều lần giặt, giúp bạn luôn tự tin và phong cách mỗi khi diện lên mình.</p>
                    <p><strong>Size : </strong>40</p>
                </div>
                <div>
                    <Button onClick={()=>navigate(`/review/${5}/create`)}>Write Review</Button>
                </div>
            </section>

            <section className='border p-5'>
                <OrderStepper orderStatus={"CONFIRM"}/>
            </section>

            <div className='border p-5'>
                <h1 className='font-bold pb-3'>Delivery Address</h1>
                <div className='text-sm space-y-2'>
                    <div className='flex gap-5 font-medium'>
                        <p>{"ManhMT2"}</p>
                        <Divider flexItem orientation='vertical'/>
                        <p>{"0123456789"}</p>
                    </div>

                    <p>{"Quang Bi -Chuong My -HaNoi"}</p>
                </div>
            </div>

            <div className='border space-y-4'>
                <div className='flex justify-between text-sm pt-5 px-5'>
                    <div className='space-y-1'>
                        <p className='font-bold'>Total Item Price</p>
                        <p>You Saved <span className='text-green-500 font-medium text-xs'> đ{100},000 </span>on this item</p>
                    </div>
                    <p className='font-medium'>đ{"850"},000</p>
                </div>

                <div className='px-5'>
                    <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                        <PaymentsIcon/>
                        <p>Thanh toan khi nhan hang</p>
                    </div>
                 </div>
           
           


            <Divider/>
            <div className='px-5 pb-5'>
                <p className='text-xs'><strong>Sold by : </strong>{"GIAY SKY2 VHD"}</p>
            </div>
            <div className='p-10'>
                <Button
                disabled={false}
                //onClick={}
                color='error' 
                sx={{py:"0.7rem"}} className='' variant='outlined' fullWidth>
                    {false?"Order Canceled":"Cancel Order"}
                </Button>
            </div>
            </div>
        </Box>
    </div>  

  )
}

export default OrderDetails