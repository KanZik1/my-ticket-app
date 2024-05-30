import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BuyTicket = ({ film, seat, addOns, time, cinema, onBack }) => {
    const handlePurchase = () => {
        alert('Ticket purchased successfully!');
    };

    return (
        <div className="p-4 border rounded-lg shadow-lg bg-gray-800">
            <button onClick={onBack} className="mb-4 text-blue-500 flex items-center">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
            </button>
            <h2 className="text-2xl font-bold mb-4">Purchase Summary</h2>
            <p className="mb-2"><strong>Film:</strong> {film.title}</p>
            <p className="mb-2"><strong>Seat:</strong> {seat}</p>
            <p className="mb-2"><strong>Time:</strong> {time.day} {time.time}</p>
            <p className="mb-2"><strong>Cinema:</strong> Cinema {cinema}</p>
            <p className="mb-4"><strong>Add-ons:</strong> {addOns.join(', ') || 'None'}</p>
            <button
                onClick={handlePurchase}
                className="px-4 py-2 bg-green-500 text-white rounded shadow-lg transform transition duration-200 hover:scale-105"
            >
                Confirm Purchase
            </button>
        </div>
    );
};

export default BuyTicket;
