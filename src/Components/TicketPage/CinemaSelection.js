import React from 'react';

const CinemaSelection = ({ cinemas, selectedCinema, handleCinemaSelect }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Select Cinema</h3>
            <div className="grid grid-cols-5 gap-2">
                {cinemas.map(cinema => (
                    <button
                        key={cinema}
                        onClick={() => handleCinemaSelect(cinema)}
                        className={`p-2 border rounded ${selectedCinema === cinema ? 'bg-blue-500 text-white' : 'bg-gray-700'}`}
                    >
                        Cinema {cinema}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CinemaSelection;
