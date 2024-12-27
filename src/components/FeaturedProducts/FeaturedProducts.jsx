import React from 'react'
import { Card } from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"

export const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12
    },
  ]

  return (<>
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>
        lorem hello this is e commerce website created using react and redux. this site build for gain my personal experience about react and grab internship opportunity from software developing company
        </p>
      </div>
      <div className='bottom'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-button-next',
            prevEl: '.custom-button-prev',
          }}
        >
          {data.map(item=>(
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='swiper-controls'>
        <button className="custom-button-prev custom-nav-button"><WestOutlinedIcon /></button>
        <button className="custom-button-next custom-nav-button"><EastOutlinedIcon /></button>
      </div>
    </div>
  </>)
}
