import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItems = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5 ">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon,15 Jul</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[80px] "
             src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/466868811_1004122431730495_1122637728812206316_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcstoFYHDVelWM2xxnTyTVbZsbsAa77qZtmxuwBrvuphp_zZT6x0aXM025YkalX07BCcFD6F_j3YkHW4LdAhbM&_nc_ohc=Z3VqFZo9ONAQ7kNvgEOC9tJ&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=A948lpQLie9w9Mtnau6TB2S&oh=00_AYB4ZAtbbl846asBFGivrA7-VDiNwdymjtj5nxn3qJsQHg&oe=673EB00B" alt=""
          />
        </div>
        <div className="w-full space-y-2 ">
          <h1 className="font-bold">GIAY SKY2 VHD</h1>
          <p>Với thiết kế hiện đại và tinh tế, áo VHD không chỉ phù hợp cho các hoạt động thể thao, dạo phố mà còn dễ dàng kết hợp với nhiều phong cách thời trang khác nhau. Áo giữ được form dáng đẹp, không bị xù lông sau nhiều lần giặt, giúp bạn luôn tự tin và phong cách mỗi khi diện lên mình.</p>
          <p><strong>Size : </strong>FREE</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
