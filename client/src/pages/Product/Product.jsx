import React, { useState } from 'react'
import "./Products.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"

export const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600lazy=load",
    ]

    return (
        <div className='product'>
            <div className='left'>
                <div className='images'>
                    <img src={images[0]} alt="img" onClick={e=>setSelectedImg(0)} />
                    <img src={images[1]} alt="img" onClick={e=>setSelectedImg(1)} />
                </div>
                <div className='mainImg'>
                    <img src={images[selectedImg]} alt='img' />
                </div>
            </div>
            <div className='right'>
                <h1>Title</h1>
                <span>$199</span>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                <div className='quantity'>
                    <button onClick={()=>setQuantity((prev) => prev === 1 ? 1 : prev-1)}>-</button> 
                    {quantity}
                    <button onClick={()=>setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className='links'>
                    <div className='item'>
                        <FavoriteBorderIcon /> ADD TO FAVORITES
                    </div>
                    <div className='item'>
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className='info'>
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-shirt</span>
                    <span>Tag: T-shirt, Women, Top</span>
                </div>
                <hr/>
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}
