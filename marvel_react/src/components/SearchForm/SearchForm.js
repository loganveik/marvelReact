import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <div className="searchContainer">
            <form className="searchForm" onSubmit={props.handleOnSubmit}>
                <input
                    type="search"
                    placeholder="Search any character"
                    value={props.search}
                    onChange={props.handleOnChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchForm;