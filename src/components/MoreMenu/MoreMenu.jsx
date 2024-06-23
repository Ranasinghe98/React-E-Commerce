import { Link } from 'react-router-dom'

export const MoreMenu = () => {
  return(<>
  <div className="more-menu-box">
    <div className="link-wrapper">
      <Link className='link' to='/'>About</Link>
      <Link className='link' to='/'>Contact</Link>
      <Link className='link' to='/'>Store</Link>
      <div className='categories'>
        <Link className='link' to="/products/1">Women</Link>
        <Link className='link' to="/products/2">Men</Link>
        <Link className='link' to="/products/3">Children</Link>
      </div>
    </div>
  </div>
  </>)
}