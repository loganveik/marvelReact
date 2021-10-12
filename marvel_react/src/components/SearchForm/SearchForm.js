import './SearchForm.css';
import React from 'react';

const SearchForm = (props) => {
    return (
        <div className="searchContainer">
            <form className="searchForm" onSubmit={props.handleOnSubmit}>
                <input
                    type="search"
                    placeholder={props.ph}
                    value={props.search}
                    onChange={props.handleOnChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchForm;