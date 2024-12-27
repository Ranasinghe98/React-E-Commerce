import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { Cart } from '../Cart/Cart';
import { MoreMenu } from '../MoreMenu/MoreMenu'
import Logo from "../../images/my-logo.png"
import { Squash as Hamburger } from 'hamburger-react'



const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuIcon, setOpenMenuIcon] = useState(false)

  return(<>
    <header className={openMenuIcon? 'navbar menu-opened' : 'navbar'}>
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
            <Hamburger toggled={openMenuIcon} toggle={setOpenMenuIcon} size={20} direction='left' duration={0.8}/>
            {/* <button className='menu' onClick={()=>setOpenMenu(!openMenu)}>Menu</button> */}
          </div>
        </div>
        <div className='center'>
          <Link className='link logo-link' to='/REACT_E_COMMERCE'>
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
      <MoreMenu /> 
      { open && <Cart /> }
    </header>
  </>)
}

export default Navbar