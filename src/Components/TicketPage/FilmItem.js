import React from 'react';

const FilmItem = ({ film, onFilmSelect }) => {
    return (
        <div
            className="p-4 border rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transform transition duration-200 hover:scale-105"
            onClick={() => onFilmSelect(film)}
        >

            <div className="mt-2">
                <h2 className="text-xl font-bold">{film.title}</h2>
                <p className="text-gray-400">{film.description}</p>
            </div>
        </div>
    );
};

export default FilmItem;
