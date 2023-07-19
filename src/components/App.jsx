import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from "./Search.js"
import searchYouTube from "../lib/searchYouTube.js"

const {useState, useEffect} = React;

var App = () => {
  const [videos, setVideos] = useState([]);
  const [oneVideo, setVideo] = useState(exampleVideoData[0]);

  let timeout = null;
  // const searchHandler = (query) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       searchYouTube(query, (videos => {
  //       setVideo(videos[0]);
  //       setVideos(videos);
  //     }))
  //   }, 5000);
  // }

  const searchHandler = (query) => {
    searchYouTube(query, (videos) => {
      setVideo(videos[0]);
      setVideos(videos);
    });
  };
const handleVideoListEntryTitleClick = (video) => {
  setVideo(video);
};

useEffect(function () {
  searchHandler("react tutorials");
}, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearchInputChange={searchHandler}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={oneVideo} />
        </div>
        <div className="col-md-5">
          {/* {list} */}
        <VideoList videos={videos} handleVideoListEntryTitleClick={handleVideoListEntryTitleClick} />
        </div>
      </div>
    </div>
    )

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;