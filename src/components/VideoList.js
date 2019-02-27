import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>)}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func,
};

export default VideoList;
