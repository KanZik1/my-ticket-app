import React, { useState } from 'react';
import FilmList from './Components/TicketPage/FilmList';
import FilmDetails from './Components/TicketPage/FilmDetails';

function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Movie Ticket Booking</h1>
        {selectedFilm ? (
          <FilmDetails film={selectedFilm} onBack={() => setSelectedFilm(null)} />
        ) : (
          <FilmList onFilmSelect={setSelectedFilm} />
        )}
      </div>
    </div>
  );
}

export default App;
