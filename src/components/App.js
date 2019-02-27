import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
