import React from 'react';

const AddOns = ({ selectedAddOns, onAddOnToggle }) => {
    const addOns = ['Popcorn', 'Soda', 'Candy'];

    return (
        <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Add-ons</h3>
            <div className="grid grid-cols-3 gap-2">
                {addOns.map(addOn => (
                    <button
                        key={addOn}
                        className={`p-2 border rounded ${selectedAddOns.includes(addOn) ? 'bg-blue-500 text-white' : 'bg-gray-700'} transform transition duration-200 hover:scale-105`}
                        onClick={() => onAddOnToggle(addOn)}
                    >
                        {addOn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AddOns;
