import React from "react";
import product from "./ProductList";
export const Shoes = ({cart,setCart}) => {
  function productadd(params) {
    setCart([...cart,params])
  }
  return (
    <div>
      <div className="container mt-4">
      <div className="row">
      {product.map((dd, index) => (
            <div className="col-md-3" key={index}>
              <div class="card text-center mb-3" width ={18+'rem'}>
              <img src={dd.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h6>{dd.name}</h6>
                  <p>₹{dd.price}</p>
                  <a href="#" class="btn btn-primary" onClick={()=>productadd(dd)}>
                   ADD TO CART
                  </a>
                </div>
              </div>
            </div>
      ))}
      </div>
      </div>
    </div>
  );
};
