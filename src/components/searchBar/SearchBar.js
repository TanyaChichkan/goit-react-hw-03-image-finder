import React, {Component} from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';


const SearchBar=({onChange,query,onSubmit})=> {

    return(
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
            value={query}
          />
        </form>
      </header>
    )

}

export default SearchBar;


  SearchBar.propTypes = {
    onSubmit:PropTypes.func.isRequired,
  };