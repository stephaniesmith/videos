import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map(video => <VideoItem key={video.id.videoId} video={video}/>)}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList;
