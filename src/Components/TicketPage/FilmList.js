import React from 'react';
import FilmItem from '../TicketPage/FilmItem';

const films = [
    { id: 1, title: 'SpiderMan: No Way Home ', description: 'When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.' },
    { id: 2, title: 'Eternals', description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.' },
    { id: 3, title: 'Godzilla x Kong: The New Empire', description: 'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Islands mysteries.' },
    { id: 4, title: 'Civil War', description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.' },
    { id: 5, title: 'Kingdom of the Planet of the Apes', description: 'Years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything hes been taught about the past.' },



    // Her kan vi tilføje flere film hvis vi har behovet, men tænker umiddelbart vi kan integrere API'en?
];

const FilmList = ({ onFilmSelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {films.map(film => (
                <FilmItem key={film.id} film={film} onFilmSelect={onFilmSelect} />
            ))}
        </div>
    );
};

export default FilmList;
