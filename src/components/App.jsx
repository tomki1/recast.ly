import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from "./Search.js"
import searchYouTube from "../lib/searchYouTube.js"

const {useState} = React;

var App = () => {
  // this will grab the etag of first object
  // const [list, setList] = useState([exampleVideoData[0].etag]);

  const [list, setList] = useState([]);

  const [oneVideo, setVideo] = useState(exampleVideoData[0]);

  let timeout = null;
  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setList(videos)
      }))
    }, 5000);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler={(e) => searchHandler(e)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={oneVideo} />
        </div>
        <div className="col-md-5">
          {/* {list} */}
        <VideoList videos={list} setVideo={(v) =>{setVideo(v)}}/>
        </div>
      </div>
    </div>
    )

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;