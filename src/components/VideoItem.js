import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  console.log(video);
  return (
    <div>
      <img src={thumbnails.medium.url}/>
      {title}
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
};

export default VideoItem;
