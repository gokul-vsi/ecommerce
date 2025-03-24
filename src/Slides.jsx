import React from 'react'
import slidesprods from './Slideprod'
export const Slides = ({cart,setCart}) => {
 
  function productadds(params) {
    setCart([...cart,params])
  }
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          {
            slidesprods.map((dd,index)=>
              <div className="col-md-3" key={index}>
                <div class="card text-center mb-3" width ={18+'rem'}>
              <img src={dd.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h6>{dd.name}</h6>
                  <p>₹{dd.price}</p>
                  <a href="#" class="btn btn-primary" onClick={()=>productadds(dd)}>ADD TO CART</a>
                </div>
              </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
