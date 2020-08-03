import React from "react";
import SearchBar from "./components/Searchbar";
import Presets from "./components/Presets";
import Video from "./components/Video";
import Header from "./components/Header";
import youtube from "./api/yt_api";
import "./styles/App.css";

const api_key = process.env.REACT_APP_YT_KEY;

class App extends React.Component {
  state = {
    videoList: [],
    video: null,
  };

  getRandom = () => {
    return Math.floor(Math.random() * 50);
  };

  handleSubmit = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: api_key,
        q: query,
        regionCode: "US",
        relevanceLanguage: "en",
      },
    });

    this.setState({ videoList: res.data.items });
    const idx = this.getRandom();
    this.setState({ video: this.state.videoList[idx] });
  };

  render() {
    const randomVideo = this.state.video;
    return (
      <div className="app">
        <Header />
        <SearchBar handleFormSubmission={this.handleSubmit} />
        <Presets onButtonClick={this.handleSubmit} />
        <Video video={randomVideo} />
      </div>
    );
  }
}

export default App;
