import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Presets.css";
import plane from "../assets/plane.svg";
import tree from "../assets/tree.svg";
import monitor from "../assets/monitor.svg";
import game from "../assets/gaming.svg";
import sport from "../assets/sport.svg";
import cooking from "../assets/cooking.svg";
import video from "../assets/video.svg";
import news from "../assets/news.svg";
import relax from "../assets/relax.svg";
import lion from "../assets/lion.svg";

const presets = ["travel", "nature", "technology", "gaming", "fitness"];
const presets2 = ["cooking", "entertainment", "news", "relaxing", "wildlife"];

class Presets extends React.Component {
  state = {
    searchVal: "",
  };

  //e.target.id not working. shows up as blank value during click
  handleClick = (val) => {
    this.setState({ searchVal: val }, () => {
      this.props.onButtonClick(this.state.searchVal);
      console.log(this.state.searchVal);
    });
  };
  render() {
    return (
      <Carousel indicators={false} interval={5000} pause="hover">
        <Carousel.Item>
          <div className="button-container">
            <button
              id="travel"
              className="preset travel"
              onClick={() => this.handleClick(presets[0])}
            >
              <div className="opac"></div>
              <img src={plane} alt="" className="icon" />
              <p className="heading">Travel</p>
            </button>
            <button
              id="nature"
              className="preset nature"
              onClick={() => this.handleClick(presets[1])}
            >
              <div className="opac"></div>
              <img src={tree} alt="" className="icon" />
              <p className="heading">Nature</p>
            </button>
            <button
              id="technology"
              className="preset tech"
              onClick={() => this.handleClick(presets[2])}
            >
              <div className="opac"></div>
              <img src={monitor} alt="" className="icon" />
              <p className="heading">Technology</p>
            </button>
            <button
              id="gaming"
              className="preset gaming"
              onClick={() => this.handleClick(presets[3])}
            >
              <div className="opac"></div>
              <img src={game} alt="" className="icon" />
              <p className="heading">Gaming</p>
            </button>
            <button
              id="fitness"
              className="preset fitness"
              onClick={() => this.handleClick(presets[4])}
            >
              <div className="opac"></div>
              <img src={sport} alt="" className="icon" />
              <p className="heading">Fitness</p>
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="button-container">
            <button
              className="preset cooking"
              onClick={() => this.handleClick(presets2[0])}
            >
              <div className="opac"></div>
              <img src={cooking} alt="" className="icon" />
              <p className="heading">Cooking</p>
            </button>
            <button
              className="preset entertainment"
              onClick={() => this.handleClick(presets2[1])}
            >
              <div className="opac"></div>
              <img src={video} alt="" className="icon" />
              <p className="heading">Entertainment</p>
            </button>
            <button
              className="preset news"
              onClick={() => this.handleClick(presets2[2])}
            >
              <div className="opac"></div>
              <img src={news} alt="" className="icon" />
              <p className="heading">News</p>
            </button>
            <button
              className="preset relax"
              onClick={() => this.handleClick(presets2[3])}
            >
              <div className="opac"></div>
              <img src={relax} alt="" className="icon" />
              <p className="heading">Relax</p>
            </button>
            <button
              className="preset wildlife"
              onClick={() => this.handleClick(presets2[4])}
            >
              <div className="opac"></div>
              <img src={lion} alt="" className="icon" />
              <p className="heading">Wildlife</p>
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Presets;
