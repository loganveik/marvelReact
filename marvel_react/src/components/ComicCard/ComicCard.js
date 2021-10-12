import './ComicCard.css';
import React from 'react';

const ComicCard = ({ comic }) => {
    return (
        // <div className="comicContainer"></div>
        <div className="comicCard" key={comic.id}>
            <img className="comicImg" src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="marvel hero" />
            <div className="comicText">
                <h1>{comic.title}</h1>
                {comic.description === null ? <p>Sorry, Marvel hasn't provided a description for this comic book yet!</p> : <p>{comic.description}</p>}
                <a className="comicBtn" href={comic.urls[0].url}>More Info</a>
            </div>
        </div>
    );
}
export default ComicCard;