import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {};
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md object-cover"
            src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/461301250_965143635628375_8227747649424027424_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTRMkFElDh-_Ypp5XSiCM692Q-ARW4qpr3ZD4BFbiqmq5pUI_BCesKw4fSAznjSPSTwCa9sDYq_I95VgGgE6Qt&_nc_ohc=SXO2oZwGNrYQ7kNvgHwMebk&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=A1lwNepKR2ae8h1Dqo5GEC4&oh=00_AYBIGKrXBJOFT9iz-m5_HEvDYkVbEFOrWH2xW_IixY1doA&oe=673E1DDC"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Ao Sat Nach VHD</h1>
          <p className="text-gray-500 font-medium text-sm">Ao VHD</p>
          <p className="text-gray-400 text-xs">
            <strong>Sold By:</strong>Loi 1 doi trong 7 ngay
          </p>
          <p className="text-sm">abcbxckshsdkjfhsdjkhkj</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity : </strong>123
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button disabled={1 === 1} onClick={handleUpdateQuantity}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">đ400,000</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
            <Close/>
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
