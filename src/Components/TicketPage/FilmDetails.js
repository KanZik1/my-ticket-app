import React, { useState } from 'react';
import ShowTimesTable from './ShowTimesTable';
import CinemaSelection from './CinemaSelection';
import TicketPurchaseButton from './TicketPurchaseButton';
import SeatSelection from './SeatSelection';
import AddOns from './AddOns';
import BuyTicket from './BuyTicket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FilmDetails = ({ film, onBack }) => {
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedCinema, setSelectedCinema] = useState(null);
    const [showSummary, setShowSummary] = useState(false);

    const handleSeatSelect = (seat) => {
        setSelectedSeat(seat);
    };

    const handleAddOnToggle = (addOn) => {
        setSelectedAddOns(prevState =>
            prevState.includes(addOn)
                ? prevState.filter(item => item !== addOn)
                : [...prevState, addOn]
        );
    };

    const handleTimeSelect = (day, time) => {
        setSelectedTime({ day, time });
    };

    const handleCinemaSelect = (cinema) => {
        setSelectedCinema(cinema);
    };

    const handleBuyTicket = () => {
        setShowSummary(true);
    };

    const handleBackFromSummary = () => {
        setShowSummary(false);
    };

    const showTimes = {
        Monday: ["16:30", "17:30", "18:30", "19:30"],
        Tuesday: ["16:30", "17:30", "18:30", "19:30"],
        Wednesday: ["16:30", "17:30", "18:30", "19:30"],
        Thursday: ["16:30", "17:30", "18:30", "19:30"],
        Friday: ["16:30", "17:30", "18:30", "19:30"],
        Saturday: ["16:30", "17:30", "18:30", "19:30"],
        Sunday: ["16:30", "17:30", "18:30", "19:30"],
    };

    const cinemas = [1, 2, 3, 4, 5];

    return (
        <div className="container mx-auto px-4">
            {showSummary ? (
                <BuyTicket
                    film={film}
                    seat={selectedSeat}
                    addOns={selectedAddOns}
                    time={selectedTime}
                    cinema={selectedCinema}
                    onBack={handleBackFromSummary}
                />
            ) : (
                <div>
                    <button onClick={onBack} className="mb-4 text-blue-500 flex items-center">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to films
                    </button>
                    <h2 className="text-2xl font-bold mb-2">{film.title}</h2>
                    <p className="text-gray-400 mb-4">{film.description}</p>

                    <ShowTimesTable
                        showTimes={showTimes}
                        selectedTime={selectedTime}
                        handleTimeSelect={handleTimeSelect}
                    />

                    {selectedTime && (
                        <CinemaSelection
                            cinemas={cinemas}
                            selectedCinema={selectedCinema}
                            handleCinemaSelect={handleCinemaSelect}
                        />
                    )}

                    <SeatSelection selectedSeat={selectedSeat} onSeatSelect={handleSeatSelect} />
                    <AddOns selectedAddOns={selectedAddOns} onAddOnToggle={handleAddOnToggle} />
                    <TicketPurchaseButton
                        disabled={!selectedSeat || !selectedTime || !selectedCinema}
                        onClick={handleBuyTicket}
                    />
                </div>
            )}
        </div>
    );
};

export default FilmDetails;
