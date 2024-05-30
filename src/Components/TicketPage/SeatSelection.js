import React from 'react';

const SeatSelection = ({ selectedSeat, onSeatSelect }) => {
    const seats = ['A1', 'A2', 'B1', 'B2'];

    return (
        <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Select a Seat</h3>
            <div className="grid grid-cols-2 gap-2">
                {seats.map(seat => (
                    <button
                        key={seat}
                        className={`p-2 border rounded ${selectedSeat === seat ? 'bg-blue-500 text-white' : 'bg-gray-700'} transform transition duration-200 hover:scale-105`}
                        onClick={() => onSeatSelect(seat)}
                    >
                        {seat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SeatSelection;
