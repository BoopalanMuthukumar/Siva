import React, { useState } from 'react';
import './BusSeatSelection.css'; // Import your CSS file for styling

const totalRows = 5;
const seatsPerRow = 4;

const BusSeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, seat) => {
    const seatNumber = `${row}-${seat}`;
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 1; row <= totalRows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}-${seat}`;
        const isSeatSelected = selectedSeats.includes(seatNumber);
        seats.push(
          <div
            key={seatNumber}
            className={`seat ${isSeatSelected ? 'selected' : 'available'}`}
            onClick={() => handleSeatClick(row, seat)}
          >
            {seatNumber}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div>
      <h2>Bus Seat Selection</h2>
      <div className="bus-seat-container">
        {renderSeats()}
      </div>
    </div>
  );
};

export default BusSeatSelection;
