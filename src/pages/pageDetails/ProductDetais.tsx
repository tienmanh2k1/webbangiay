import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import Review from "../Review/Review";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/449554088_1545967739667702_3539267635312111355_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEhYkDVAyiuKHkomx2aUsW7up8qsbHZKq66nyqxsdkqrvqwxJX2GgjfDPgv8J-swHwP5gsv7slxOUsB2Xt6Ezel&_nc_ohc=WGaDmGEX_VgQ7kNvgHXYeVV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGepCjebfwUMjm4FxKANMloqudK8JaH2rjhgIm-mhHKUw&oe=675DB1E8"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/448904889_1168507917789582_1524430810429472372_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGd_4Snc2LLMIjVc6FZ-EnXSgwETO0RX8xKDARM7RFfzJF3-dJAnc_idDwFq7IlcuY9u0-xsNiRpDtCSAyP6xqm&_nc_ohc=UvGffxGbKx0Q7kNvgFexuqe&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QErB6o9UtLZo7-z39GgaJnFg9pBjuHzqShQ1adk4tNl9A&oe=675D8A7F"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color ">
            AO SAT NACH VHD
          </h1>
          <p className="text-gray-500 font-semibold">Men`s</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>1000 Ratings</span>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">VND 400,000</span>
              <span className="line-through text-gray-400">VND 999,000</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>         
              <p className="text-sm">chuen khaon truoc mien ship</p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Hang Chinh Hang Made In VietNam</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>Hoan Tien 100%</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free ship va Doi Hang</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Nhan Hang Thanh Toan</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Them Vao gio hang
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Whishlist
            </Button>
          </div>

          <div className="mt-5 ">
            <p>
              Áo VHD được thiết kế với chất liệu cao cấp co giãn 4 chiều, mang
              đến cho bạn trải nghiệm thoải mái và dễ chịu trong từng chuyển
              động. Chất liệu này không chỉ mềm mại và thoáng mát, mà còn ôm sát
              cơ thể một cách tự nhiên mà không gây gò bó.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
