import React from 'react';

const TicketPurchaseButton = ({ disabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow-lg disabled:opacity-50"
            disabled={disabled}
        >
            Buy Ticket
        </button>
    );
};

export default TicketPurchaseButton;
