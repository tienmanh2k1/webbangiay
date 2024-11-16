import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import PricingCart from "../Cart/PricingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymenGateWayList = [
  {
    value: "VNPAY",
    image:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/202166185_2021396718013233_8499389898242103910_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l5liMoKs5FgQ7kNvgE3GxuO&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=A1BZyaEfSCPCMSp4tO-Ybo1&oh=00_AYBhPt-6cSW0vSPHRX4-df6wxW_2oXW2R00XToRe9dGIcw&oe=673E8A29",
    lable: "VNPAY",
  },
  {
    value: "MOMO",
    image:
      "https://developers.momo.vn/v3/vi/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png",
    lable: "MOMO",
  },
];

const CheckOut = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymenGateWay,setPaymentGateWay] = React.useState("MOMO");
  const handlePaymentChange = (event:any)=>{
    setPaymentGateWay(event.target.value)
  }

  return (
    <>
      <div className="pt-10 px-5 sm:px-5 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold ">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Saved Address</p>
              <div className="space-y-3">
                {[1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>
            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>

          <div>
            <div className="space-y-3 border p-5 rounded-md">
              <h1 className="text-primary-color font-medium pb-2 text-center">
                Choose Payment GateWay
              </h1>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className="flex justify-between pr-0"
                onChange={handlePaymentChange}
                value={paymenGateWay}
              >
                {paymenGateWayList.map((item) => (
                  <FormControlLabel
                    className="border w-[45%] pr-2 rounded-md flex justify-center"
                    value={item.value}
                    control={<Radio />}
                    label={
                      <img
                        className={`${
                          item.value === "MOMO" ? "w-14" : "object-cover"
                        }`}
                        src={item.image}
                        alt={item.lable}
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </div>
            <div className="border rounded-md">
              <PricingCart />
              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  CheckOut
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default CheckOut;
