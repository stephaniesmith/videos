import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  static propTypes = {

  };

  state = { term: '' };

  onInputChange = ({ target }) => {
    this.setState({ term: target.value });
  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form className="ui form">
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
