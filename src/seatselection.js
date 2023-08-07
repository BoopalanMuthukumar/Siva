import React,{useState} from "react";
import { Link } from "react-router-dom";

const SeatSelection=() =>{
    const [seat, setRadio] = useState('');
    const [Fare, setFare] = useState('');
    const [BoardingTime, setBoardingTime] = useState('');
    const [EndingTime, setEndingTime] = useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Type of seat:"+seat)
        console.log("Fare:"+Fare)
        console.log("Boarding Time:"+BoardingTime)
        console.log("Ending Time:"+ EndingTime)
    }
    return(
        <div>
                  <form onSubmit={e =>{handleSubmit(e)}}>
        <h1>Seatselection</h1>
        <p>Select your seat</p>
        <div >
           <div  id="seat_1_1">1</div> 
           <div  id="seat_1_2">2</div> 
           <div  id="seat_1_3">3</div> 
           <div  id="seat_1_4">4</div> 
            <div  id="seat_1_5">5</div>
           <br />
           <div  id="seat_1_6">6</div>
           <div  id="seat_1_7">7</div>
           <div  id="seat_1_8">8</div>
           <div  id="seat_1_9">9</div>
           <div  id="seat_1_10">10</div>   
      </div><br />
      <div>
        <label htmlFor="seat">Seat</label>
      </div>
      <div>
      <input type="radio" id="women seat" name="seat" />
        <label htmlFor="women seat" value="Women Seat">Women Seat</label>  
      <input type="radio" id="Booked" name="seat" />
      <label htmlFor="Booked">Booked</label>
      <input type="radio" id="Available" name="seat"></input>
      <label htmlFor="Available">Available</label>
      <input type="radio" id="for Disability person" name="seat"></input>
      <label htmlFor="for Disability person">For Disability Person</label> onChange={(e) => setRadio(e.target.value)}
      </div> <br />
      <div>
            <label htmlFor="fare">Fare</label>
            <input
            type="number"
            id="fare"
            name="fare"  onChange={(e) => setFare(e.target.value)}
            />
        </div><br />

        <div>
            <label htmlFor="boarding time">Boarding Time</label>
            <input
            type="time"
            id="boarding time"
            name="boarding time"  onChange={(e) => setBoardingTime(e.target.value)}
            />
        </div><br />
        <div>
            <label htmlFor="ending time">Ending Time</label>
            <input
            type="time"
            id="ending time"
            name="ending time" onChange={(e) => setEndingTime(e.target.value)}
            />
        </div><br />
        <div>
               
        <Link to='/ThankYou'><button>Click</button></Link>
            
                <input
                type="reset"
                value="cancel"
                />
            </div>
           
        </form>
        </div>
  
    )
}

export default SeatSelection