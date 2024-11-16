import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/461192277_965143172295088_8281135814775193748_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6xVyWgBPMwTpImenciL9rtGQI1bTszJe0ZAjVtOzMl-zIvbLVLotr7P4ykv-Rb8leEm6tWGca7ya9SIXR85X7&_nc_ohc=NsyoPtrwUhIQ7kNvgEqGMgy&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Apan6LD8OXPCNJVUPB_F4dP&oh=00_AYD4PD9pGRzdFJ8e22lGeqUmgupkaj0XHtO5zzoOKTcBMQ&oe=673E01E8"
          alt=""
        />

        <div>
          <div>
            <p className="font-bold text-lg">AO SAT NACH VHD</p>
            <p className="text-lg text-gray-600">Men`s</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">VND 400,000</span>
              <span className="line-through text-gray-400">VND 999,000</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 w-full">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3 ">
             <ReviewCard />
             <Divider/>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
