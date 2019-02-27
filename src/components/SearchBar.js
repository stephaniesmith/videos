import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  static propTypes = {

  };

  state = { term: '' };

  onInputChange = ({ target }) => {
    this.setState({ term: target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
