import React from 'react'

const SimilarProductCard = () => {
  return (
    <div>
         <div className="group px-4 relative">
        <div
          className="card">
          
            <img
              className="card-media object-top"
              src={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/461192277_965143172295088_8281135814775193748_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6xVyWgBPMwTpImenciL9rtGQI1bTszJe0ZAjVtOzMl-zIvbLVLotr7P4ykv-Rb8leEm6tWGca7ya9SIXR85X7&_nc_ohc=NsyoPtrwUhIQ7kNvgEqGMgy&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Apan6LD8OXPCNJVUPB_F4dP&oh=00_AYD4PD9pGRzdFJ8e22lGeqUmgupkaj0XHtO5zzoOKTcBMQ&oe=673E01E8"}
              alt=""
            />
         

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
    </div>
  )
}

export default SimilarProductCard