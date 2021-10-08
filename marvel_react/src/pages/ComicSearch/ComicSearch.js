import React, { useState } from 'react';
import './ComicSearch.css';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../../components/SearchForm/SearchForm';
import ComicCard from '../../components/ComicCard/ComicCard';



const ComicSearchPage = () => {
    const [comic, setComic] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const getComic = async () => {
        const result = await axios.get(`https://gateway.marvel.com/v1/public/comics?title=${search}&limit=6&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9`);
        const data = result.data.data.results;
        if (data === undefined) {
            setError(`Sorry, couldn't find ${search}. Check your spelling, or search another character!`);
        } else {
            setComic(data);
        }
    }
    // getComic();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        getComic(search);
        setSearch("");
        setError("");
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <Nav back_signout={"Back"} link={"/profile"} />
            <div className="comicSearch">
                <SearchForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />
                <div className="cardContainer">
                    {comic == 0
                        ?
                        <div></div>
                        :
                        error !== ""
                            ?
                            <p>{error}</p>
                            :
                            comic.map(item => (
                                <ComicCard key={item.id} comic={item} />
                            ))
                    }
                </div>
            </div>
        </>
    )
}
export default ComicSearchPage;