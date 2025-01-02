import React from 'react'
import {Link} from "react-router-dom"

export const Card = ({item}) => {

    return (<>
        <Link className="slide-item link" to={`/product/${item.id}`}>
            <div className='card'>
                <div className='image'>
                    {item.isNew && <span>New Season</span> }
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
