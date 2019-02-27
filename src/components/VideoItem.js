import './VideoItem.css';
import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  console.log(video);
  return (
    <div className="video-item item">
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
};

export default VideoItem;
