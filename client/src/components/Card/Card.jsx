import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

export const Card = ({item}) => {

    console.log(item.img2)

    return (<>
        <Link className="link" to={`/product/${item.id}`}>
            <div className='card'>
                <div className='image'>
                    <img src={item.img} alt="product" className='mainImg' />
                    <img src={item.img2} alt="product" className='secondImg' />
                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    </>)
}
