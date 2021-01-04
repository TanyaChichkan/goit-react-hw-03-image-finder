import React, {Component} from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';


export default class SearchBar extends Component{
  state={
    inputValue: ""
  }

  handleChange=e=>{
    const{value} = e.target;
    this.setState({inputValue: value})
  };

  handleSubmit=e=>{
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({inputValue: ""})
  }


  render(){
    return(
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
      </form>
</header>
    )
  }
}


  SearchBar.propTypes = {
    onSubmit:PropTypes.func.isRequired,
  };