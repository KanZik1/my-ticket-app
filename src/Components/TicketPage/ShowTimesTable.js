import React from 'react';

const ShowTimesTable = ({ showTimes, selectedTime, handleTimeSelect }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Show Times</h3>
            <table className="w-full text-left table-fixed">
                <thead>
                    <tr>
                        {Object.keys(showTimes).map(day => (
                            <th key={day} className="w-1/7 p-2">{day.substring(0, 3)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 4 }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.keys(showTimes).map((day, colIndex) => (
                                <td key={colIndex} className="p-2 border">
                                    <button
                                        onClick={() => handleTimeSelect(day, showTimes[day][rowIndex])}
                                        className={`w-full ${selectedTime && selectedTime.day === day && selectedTime.time === showTimes[day][rowIndex] ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        {showTimes[day][rowIndex]}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowTimesTable;
