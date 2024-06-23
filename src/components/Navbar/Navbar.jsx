import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { Cart } from '../Cart/Cart';
import { MoreMenu } from '../MoreMenu/MoreMenu'
import Logo from "../../images/my-logo.png"



const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    return(<>
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                    <div className='more-menu'>
                      <button className='menu' onClick={()=>setOpenMenu(!openMenu)}>Menu</button>
                    </div>
                </div>
                <div className='center'>
                    <Link className='link' to='/REACT_E_COMMERCE'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Store</Link>
                    </div>
                    <div className='icons'>
                        <div className='cartIcon' onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            { openMenu && <MoreMenu /> }
            { open && <Cart /> }
        </div>
    </>)
}

export default Navbar