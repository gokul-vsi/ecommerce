import React from 'react'
import img1 from './carousel-image/hero-1.webp'
import img2 from './carousel-image/home-2.webp'
import img3 from './carousel-image/hero-3.jpg'
import img4 from './carousel-image/home-1.jpg'
import img5 from './carousel-image/home-3.webp'
import img6 from './carousel-image/hot-1.jpg'
import img7 from './carousel-image/hot-2.jpg'
import img8 from './carousel-image/hot-3.jpg'
import img9 from './carousel-image/gender-1.jpg'
import img10 from './carousel-image/gender-2.jpg'
import img11 from './carousel-image/gender-3.jpg'
import fot_logo from './logo/skechers-1.png'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <img src={img1} alt="" className='img-fluid w-100 mt-2'/>
          </div>
        </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            <h2 className='text-center mt-3 hero-h2'>Upcoming Events</h2>
              <img src={img2} alt="" className='img-fluid hero-2img mt-1'  />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className='text-center mt-3 hero-h2' >New Offer</h2>
              <img src={img3} alt="" className='img-fluid mt-1' />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h2 className='text-center mt-3 hero-h2' >What's New</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src={img4} alt="" className='img-fluid mt-2' />
            </div>
            <div className="col-md-6 col-12">
              <img src={img5} alt="" className='img-fluid mt-2' />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h2 className='text-center mt-3 hero-h2' >What's Hot?</h2>
            </div>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-4 col-12">
             <img src={img6} alt="" className='img-fluid'/>
             <Link class="nav-link active" aria-current="page" to='/shoes'><p className='mt-2 dec'>Sandals >></p></Link>
            </div>
            <div className="col-md-4 col-12">
              <img src={img7} alt="" className='img-fluid'/>
              <Link class="nav-link active" aria-current="page" to='/shoes'><p className='mt-2 dec'>slip_ins >></p></Link>
            </div>
            <div className="col-md-4 col-12">
              <img src={img8} alt="" className='img-fluid'/>
              <Link class="nav-link active" aria-current="page" to='/shoes'><p className='mt-2 dec'>Apparels >></p></Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className='text-center mt-3'>Shop By Gender</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={img9} alt="" className='img-fluid' />
              <Link class="nav-link active" aria-current="page" to='/shoes'> <p className='mt-2 dec'>SHOP WOMENS</p> </Link>
            </div>
            <div className="col-md-4">
              <img src={img10} alt="" className='img-fluid' />
              <Link class="nav-link active" aria-current="page" to='/shoes'> <p className='mt-2 dec'>SHOP MENS</p> </Link>
            </div>
            <div className="col-md-4">
              <img src={img11} alt="" className='img-fluid' />
              <Link class="nav-link active" aria-current="page" to='/shoes'>  <p className='mt-2 dec'>SHOP KIDS</p> </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-2 mt-2">
          <div className="row">
            <div className="col-md-12">
              <h3 className='text-center mt-4'>SHOP WITH CONFIDENCE AT SKECHERS ONLINE STORE</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid details">
          <div className="row">
            <div className="col-md-3 mt-4 mb-4">
              <h6>OFFICIAL BRAND STORE:</h6>
              <p>The largest selection of 100% official Skechers products in India</p>
              <i class="fa-solid fa-shop det"></i>
            </div>
            <div className="col-md-3 mt-4 mb-4">
              <h6>SHOP AT YOUR CONVINIENCE:</h6>
              <p>Free home delivery within 10 Working days.* </p>
              <i class="fa-solid fa-truck det"></i>
            </div>
            <div className="col-md-3 mt-4 mb-4">
              <h6>SAFE SHOPPING:</h6>
              <p>Secure Socket Layer(SSL) encryption makes every payment safe </p>
              <i class="fa-solid fa-bag-shopping det"></i>
            </div>
            <div className="col-md-3 mt-4 mb-4">
              <h6>EASY RETURN POLICY:</h6>
              <p>Easy & hassle free return of products.* </p>
              <i class="fa-solid fa-rotate-right det mt-4"></i>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 className='d-flex justify-content-start ms-2'>Unlock Your True Potential with Skechers: The Ultimate Footwear Experience</h4>
              <p className='d-flex justify-content-start'>Skechers, a free-spirited lifestyle brand brings an assortment of trendy apparel, accessories, and comfort footwear online for men, women, and kids. Vibrant designs, vast collection of products, new age technology, discounted rates and customer rewards make Skechers an exclusive lifestyle brand for both in-store and online shopping. Skechers India is an ideal digital platform to suit the Indian customers with a latest range of clothing and best collection of shoes online. Whether you are an outdoor enthusiast, a consistent fitness freak or a light walker, the collection of Skechers shoes online can be selected to support specific activities like running, hiking, training, and walking. Start using an interactive shoe finder to find your best match of Skechers footwear.Customers worldwide</p>
            </div>
          </div>
        </div>
        <section className='fot-1'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className='d-flex justify-content-start mt-5'>POPULAR SEARCHES</h6>
              <p>Women's Shoes | Walking Shoes for Women | Walking Shoes for Men | Men's Shoes | Running Shoes for Women | Running Shoes for Men | Women's Slippers | Men's Slippers | Kids Shoes | Slip-Ins | Men's Jackets | Women's Jacket | Men's T-Shirts | Sports Bra | Arch Fit Shoes| Memory Foam| Goga Mat | GO Walk| James Gold Crown Collection | GO Run | Mark Nason | Kids Light Up Shoes | Tokidoki | Shoes Sale| Running Shoes | Walking Shoes | Trail-Hiking | Black Shoes</p>
            </div>
          </div>
        </div>
        </section>
        <section className='fot-4'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img src={fot_logo} alt=""  className='fot-logo d-flex justify-content-start mt-4'/>
              </div>
            </div>
          </div>
        </section>
        <section className='fot-2'>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h6 className='mt-4 bol'>About Skechers</h6>
                <p className='mt-3'>Corporate Info</p>
                <p>Corporate Governance</p>
              </div>
              <div className="col-md-2">
                <h6 className='mt-4 bol'>Customer Service</h6>
                <p className='mt-3'>Return Policy</p>
                <p>Product Information</p>
                <p>Contact Us</p>
                <p>Sitemap</p>
              </div>
              <div className="col-md-2">
                <h6 className='mt-4 bol'>My Account</h6>
                <p className='mt-3'>Order Status</p>
                <p>Saved Products</p>
                <p>My Returns</p>
              </div>
              <div className="col-md-2">
                <h6 className='mt-4 bol'>Others</h6>
                <p className='mt-3'>FAQ</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Find A Store</p>
              </div>
              <div className="col-md-2">
              <h6 className='mt-4 bol'>Easy Return:</h6>
              <p className='mt-3'>Free Return</p>
              <p>upto 10 Days</p>
              </div>
              <div className="col-md-2">
          <h6 className='mt-4 fol-3'>Follow us</h6>
          <div className='d-flex justify-content-center mt-3 mb-3 gap-3'>
          <i class="fa-brands fa-facebook fot-5 text-center"></i>
          <i class="fa-brands fa-twitter fot-5 text-center"></i>
          <i class="fa-brands fa-instagram fot-5 text-center"></i>
          <i class="fa-brands fa-youtube fot-5 text-center"></i>
          </div>
          </div>
            </div>
          </div>       
           </section>
           <section className='fot-2'>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h6 className='mt-3 fot-last mb-3'><i class="fa-solid fa-copyright pe-1"></i>Copyright Claimed By Gokulnath</h6>
                </div>
              </div>
            </div>
           </section>
    </div>
  )
}
