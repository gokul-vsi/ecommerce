import React, { useEffect, useState } from 'react'

export const Cart = ({cart,setCart}) => {
 const [price,setPrice] = useState(0);

 useEffect(()=>{
  let amt = 0;
  cart.map((dd) => amt += dd.price * dd.count)
  setPrice(amt)
 })

function numbercount(params,numberadd) {
  const findindex = cart.indexOf(params);
  if(cart[findindex].count>0)
  {
     cart[findindex].count +=  numberadd
     setCart([...cart]);
  }
  if(cart[findindex].count===0)
  {
    remove(params);
  }
  
}
function remove(params) {
  let removedata = cart.filter((cartdata)=>cartdata.id !== params.id)
  setCart(removedata)
}



  return (
    <div>
      <div className="container mt-4">
      <div className="row">
        
        
        {
      cart.map((dd, index) => (
            <div key={index} className='col-md-3' >
              <div class="card  text-center mb-3" width ={1+'rem'}>
              <img src={dd.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h6>{dd.name}</h6>
                  <p>₹{dd.price}</p>
                 <div className='d-flex gap-2 justify-content-center mb-2'>
                 <button className='btn btn-primary' onClick={()=>numbercount(dd,-1)}>-</button>
                  <h5>{dd.count}</h5>
                  <button className='btn btn-primary' onClick={()=>numbercount(dd,1)}>+</button>
                 </div>
                 <a href="#" class="btn btn-primary" onClick={()=>remove(dd)}>
                   REMOVE
                  </a>
                </div>
              </div>
            </div>
      ))
   }
        <div>
          <h1 className='mt-3'>Total Amount: {price}</h1>
        </div>
      
      </div>
      </div>
    </div>
  )
}
