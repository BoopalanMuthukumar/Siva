import React, { useState } from "react";
import { Link } from "react-router-dom";

    const Mainpage = () => {
        const [Source, setSource] = useState('');
        const [Destination, setDestination] = useState('');

        const [Brand, setBrand] = useState('');
        const [NoOfseats, setNoOfSeats] = useState('');
        const [TypeOfSeat, setSeat] = useState('');
        const [Fare, setFare] = useState('');
        const [Time, setTime] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Source:" + Source)
            console.log("Destination:" + Destination)

            console.log("Brand:" + Brand)
            console.log("No of Seats:" + NoOfseats)
            console.log("Seat:" + TypeOfSeat)
            console.log("Fare:" + Fare)
            console.log("Time:" + Time)

        }


        return (
            <form onSubmit={e => { handleSubmit(e) }}>
                <div>
                    <h1>MAIN PAGE</h1>
                    <label htmlFor="source">Source</label><br />
                    <input
                        type="text"
                        id="source"
                        name="source"
                       
                        onChange={(e) => setSource(e.target.value)}
                    />
                </div><br />
                <div>
                    <label htmlFor="destination">Destination</label><br />
                    <input
                        type="text"
                        id="destination"
                        name="destination" onChange={(e) => setDestination(e.target.value)}
                    />
                </div><br />
                <div>
                    <label htmlFor="variation">Variation of price Range</label>
                    <select id="variation" name="variation" >
                        <option value=" "> range </option>
                        <option value="500 to 700"> 500 to 700 </option>
                        <option value="700 to 900">  700 to 900 </option>
                        <option value="900 to 1400"> 900 to 1400 </option>
                        <option value="1400 to 2000">1400 to 2000 </option>
                    </select>
                </div><br />
                <div>
                    <label htmlFor="brand"> Bus brand</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand" onChange={(e) => setBrand(e.target.value)}
                    />
                </div><br />
                <div>
                    <label htmlFor="no of seats">No of seats</label>
                    <input
                        type="text"
                        id="no of seats"
                        name="no of seats" onChange={(e) => setNoOfSeats(e.target.value)}
                    />
                </div><br />
                <div>
                    <h3>Seat</h3>
                    <input type="radio" id="upperdeck" name="seat" />
                    <label htmlFor="upper deck">Upper Deck</label><br></br>
                    <input type="radio" id="lowerdeck" name="seat" />
                    <label htmlFor="lower deck">Lower Deck</label><br></br>
                    <input type="radio" id="seater" name="seat" />
                    <label htmlFor="seater">Seater</label>

                </div><br />
                <div>
                    <label htmlFor="fare">Fare</label>
                    <input
                        type="number"
                        id="fare"
                        name="fare" onChange={(e) => setFare(e.target.value)}
                    />
                </div><br />
                <div>
                    <label htmlFor=" time">Time</label>
                    <input type="time" id="time" name="time"></input>
                </div><br />
                <div>

                    <Link to='/seatselection'><button>Click</button></Link>

                    <input
                        type="reset"
                        value={"cancel"}
                    />
                </div>

            </form>
        )

    }

export default Mainpage;