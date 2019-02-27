import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: data.items });
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
