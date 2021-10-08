import React from 'react';
import './CharCard.css';

const CharCard = ({char}) => {
    return (
        <div className="charCard" key={char.id}>
            <img className="charImg" src={char.thumbnail.path + '.jpg'} alt="marvel hero image" />
            <div className="charText">
                <h1>{char.name}</h1>
                {char.description === "" ? <p>Sorry, Marvel hasn't provided a description for this character yet!</p> : <p>{char.description}</p>}
            </div>
        </div>
    )
}
export default CharCard;