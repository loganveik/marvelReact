import React, { useState } from 'react';
import './CharSearch.css';
import axios from 'axios';



const CharSearchPage = () => {
    const [char, setChar] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    // same state for error and char?

    const getChar = async () => {
        const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${search}&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9`);
        // const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=hulk&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9`);
        if (result.data.data.results[0] === undefined) {
            // setChar([]);
            setError(`Sorry, couldn't find ${search}. Check your spelling, or search another character!`);
        } else {
            setChar(result.data.data.results[0]);
        }
    }
    // getChar();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        getChar(search);
        setSearch("");
        setError("");
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="charSearch">
            <form className="charForm" onSubmit={handleOnSubmit}>
                <input
                    type="search"
                    placeholder="Search any character"
                    value={search}
                    onChange={handleOnChange}
                />
                <button type="submit">Search</button>
            </form>
            {char == 0
                ?
                <div></div>
                :
                error !== ""
                    ?
                    <p>{error}</p>
                    :
                    <div className="charCard" key={char.id}>
                        <img className="charImg" src={char.thumbnail.path + '.jpg'} alt="marvel hero image" />
                        <div className="charText">
                            <h1>{char.name}</h1>
                            {char.description === "" ? <p>Sorry, Marvel hasn't provided a description for this character yet!</p> : <p>{char.description}</p>}
                        </div>
                    </div>
            }
        </div>
    )
}
export default CharSearchPage;