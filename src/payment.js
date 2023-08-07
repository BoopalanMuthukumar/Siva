import React from "react";

const payment=() =>{
     <form>
        <h1>PAYMENT METHOD</h1>
        <div>
        <label htmlFor="Payment">Payment</label>
      </div>
      <div>
      <input type="radio" id="paytm/google pay/phone pay" name="paytm/google pay/phone pay"></input>
        <label htmlFor="paytm/google pay/phone pay">Paytm/Google Pay/Phone Pay</label>  
      </div>
      <div>
      <input type="radio" id="UPI" name="UPI"></input>
      <label htmlFor="UPI">Booked</label>
      </div>
      <div>
      <input type="radio" id="Available" name="Available"></input>
      <label htmlFor="Available">Available</label>
      </div>
      <div>
      <input type="radio" id="for Disability person" name="for Disability person"></input>
      <label htmlFor="for Disability person">For Disability Person</label>
      </div> <br />
     </form>
}