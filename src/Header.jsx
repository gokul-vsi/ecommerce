import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from './logo/skechers-1.png'
export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container">
    <a class="navbar-brand d-flex justify-content-start" href="#">
      <img src={logo} alt="" className='logo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/shoes'>Shoes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/slides'>Slides</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/contact'>Contact</Link>
        </li> */}
        </ul>
        <div className='d-flex gap-4 justify-content-center'>
        <Link class="nav-link active" aria-current="page" to='/cart'> <ShoppingCartOutlinedIcon style={{fontSize:'28px'}} className='f-1 mt-2'/> </Link>
        <i class="fa-regular fa-user f-1 mt-2"></i>
      </div>
    </div>
   
  </div>
</nav>
<Outlet></Outlet>
    </div>
  )
}
