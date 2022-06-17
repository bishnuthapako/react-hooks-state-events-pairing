import video from "../data/video.js";
import Videos from "./Videos.js";
import Comments from "../components/Comments"


console.log(video)
function App() {
  
  const comments = video.comments;
 

  return (
    <div className="App">
      <Videos 
      video={video.embedUrl} 
      title={video.title} 
      views={video.views} 
      uploadDate={video.createdAt} 
      upvotes={video.upvotes} 
      downvotes={video.downvotes} 

      />
      <Comments comments={comments}/>
    </div>
    
  );
}

export default App;
