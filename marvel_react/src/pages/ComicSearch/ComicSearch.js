import './ComicSearch.css';
import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../../components/SearchForm/SearchForm';
import ComicCard from '../../components/ComicCard/ComicCard';
import BackBtn from '../../components/BackBtn/BackBtn';


const ComicSearchPage = () => {
    const [comic, setComic] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const getComic = async () => {
        const result = await axios.get(`https://gateway.marvel.com/v1/public/comics?title=${search}&limit=6&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9`);
        const data = result.data.data.results;
        if (data.length === 0) {
            setError(`Sorry, couldn't find '${search}'. Check your spelling, or search another comic!`);
        } else {
            setComic(data);
        }
    }


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
            <Nav />
            <div className="comicSearch">
                <BackBtn id={"comic_search_back"} />
                <SearchForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} ph={"Search any comic"}/>
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