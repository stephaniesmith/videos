import './VideoItem.css';
import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={thumbnails.medium.url}/>
      <div className="content">
        <div className="header">
          {title}
        </div>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoItem;
