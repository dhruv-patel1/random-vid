import React from "react";
import "../styles/Searchbar.css";
import search from "../assets/search.svg";

class SearchBar extends React.Component {
  state = {
    searchValue: "",
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmission(this.state.searchValue);
  };
  render() {
    return (
      <div className="form-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={this.handleChange}
          />
          <button type="submit" className="search-button">
            <img src={search} alt="search" className="search-logo" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
