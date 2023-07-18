import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => {
  // <div className="video-list">
  //   <div><h5>{props.videos[0].etag}</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  // </div>
  // console.log(props.state1);//logs this state's video
  return (
  <div className="video-list">
    {props.videos.map((video, index) => <VideoListEntry video={video} key={index} setVideo={props.setVideo}/>)}
  </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
