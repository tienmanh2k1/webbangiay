import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/448904889_507366465078059_6109675367466441527_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEMegLIYhRdBFJMeCaa0Gz_xxNcsP2zFsPHE1yw_bMWwwtY01oj91RiQ6LnjjpG6SKieJwFg_QOfj4cLPSPnOrw&_nc_ohc=ObpSp-t0WY8Q7kNvgE59jKA&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&oh=03_Q7cD1QHWouccGWLCgZBurrraC6pFOypTn63nXf6si9OE4p6-PQ&oe=675C4F44",
  "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/449825905_332447299913965_7255494942149267181_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHiZ2Hbz5Bo-7g25YyxgoVSL-wDhchL93sv7AOFyEv3e5UmYvh9CpXTllAwaQjNAyNTbuGplN4YR323iR0idteG&_nc_ohc=XDIHbLann_cQ7kNvgF12_if&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&oh=03_Q7cD1QGKkLO0YXaJw1YtriJ_NRhXy5S4dUmAcJnyTSCZSKI4OQ&oe=675C2BF6",
  "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/449830770_444935475120257_1289755435391675739_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEjOamSp1KLw6LU5YiquVhVi4DhVcjwk5uLgOFVyPCTm-7gW2-k5rlkRRN_GqM4rmegDAAyVpz-j8BLlF5KFmgR&_nc_ohc=my5iz5nH1hwQ7kNvgH9owNZ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1QFUZ6ntK_Gh86ER3Kbxzi4n7OX7ZLO9MTaNYKp0t4A4SQ&oe=675C20A0",
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHoverd] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHoverd(true)}
          onMouseLeave={() => setIsHoverd(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          { isHovered &&
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>

                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Shoes SKY</h1>
            <p>SKY 2</p>
          </div>

          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">VND 400,000</span>
            <span className="thin-line-through text-gray-400">VND 999,000</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
