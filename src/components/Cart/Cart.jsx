import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

export const Cart = () => {

    const data = [
        {
            id: 7,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            desc: "this is product description to each product read carefully this description",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 8,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "this is product description to each product read carefully this description",
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]

    return (<>
        <div className='cart'>
            <h1>Dev.R Shopping Cart</h1>
            {data?.map(item=>(
                <div className='item' key={item.id}>
                    <img src={item.img} alt="img" />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0,100)}</p>
                        <div className='price'> 1 x ${item.price} </div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    </>)
}
