import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => <VideoItem key={video.id.videoId} video={video}/>)}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList;
