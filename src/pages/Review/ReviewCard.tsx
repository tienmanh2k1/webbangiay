import { Delete } from "@mui/icons-material";
import { Avatar, Grid2, Box, Rating, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              M
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">ManhMt2</p>
              <p className="opacity-70">2024-11-16</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />

          <p>Great product</p>
          <div>
            <img
              className="w-14 h-24 object-cover"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/448904889_1168507917789582_1524430810429472372_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGd_4Snc2LLMIjVc6FZ-EnXSgwETO0RX8xKDARM7RFfzJF3-dJAnc_idDwFq7IlcuY9u0-xsNiRpDtCSAyP6xqm&_nc_ohc=UvGffxGbKx0Q7kNvgFexuqe&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QErB6o9UtLZo7-z39GgaJnFg9pBjuHzqShQ1adk4tNl9A&oe=675D8A7F"
              alt=""
            />
          </div>
        </Grid2>
      </Grid2>
     <div>
     <IconButton>
        <Delete sx={{color:red[700]}} />
      </IconButton>
     </div>
    </div>
  );
};

export default ReviewCard;
