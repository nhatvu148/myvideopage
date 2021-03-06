import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

interface Props {
  videos: string;
}

const App: React.FC<Props> = () => {
  const [videos, setVideos] = React.useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = React.useState<string>("");

  React.useEffect(() => {
    onTermSubmit("buildings");
  }, []);

  const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";

  const onTermSubmit = async (term: string) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: KEY
        }
      }
    );

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video: string): void => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
