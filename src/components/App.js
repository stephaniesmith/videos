import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

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
    const { videos } = this.state;
    
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={videos}/>
      </div>
    );
  }
}

export default App;
