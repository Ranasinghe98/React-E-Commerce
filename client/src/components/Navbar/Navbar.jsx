import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownIcon'
import SearchIcon from '@mui/icons-material/SearchIcon'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlinedIcon'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlinedIcon'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlinedIcon'

const Navbar = () => {
    return(<>
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <img src='/images/en.png' alt='flag' />
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className='center'></div>
                <div className='right'></div>
            </div>
        </div>
    </>)
}

export default Navbar