import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {
  if(!video) return <div>Loading</div>;

  const { title, description } = video.snippet;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player"/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object,
};

export default VideoDetail;
