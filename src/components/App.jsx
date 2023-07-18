import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';

const {useState} = React;

var App = () => {
  // this will grab the kind of first object
  // const [list, setList] = useState([exampleVideoData[0].etag]);
  const [list, setList] = useState([...exampleVideoData]);
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          {/* {list} */}
        <VideoList videos={list}/>
        </div>
      </div>
    </div>
    )

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;