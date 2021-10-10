import React, { useState } from 'react';
import './CharSearch.css';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../../components/SearchForm/SearchForm';
import CharCard from '../../components/CharCard/CharCard';
import BackBtn from '../../components/BackBtn/BackBtn';


const CharSearchPage = () => {
    const [char, setChar] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const getChar = async () => {
        const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${search}&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9`);
        if (result.data.data.results[0] === undefined) {
            setError(`Sorry, couldn't find '${search}'. Check your spelling, or search another character!`);
        } else {
            setChar(result.data.data.results[0]);
            console.log(result.data.data.results[0])
        }
    }

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
        <>
            <Nav />
            <div className="charSearch">
                <BackBtn />
                <SearchForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} search={search} />
                {char == 0
                    ?
                    <div></div>
                    :
                    error !== ""
                        ?
                        <p>{error}</p>
                        :
                        <CharCard char={char} />
                }
            </div>
        </>
    )
}
export default CharSearchPage;