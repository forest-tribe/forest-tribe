import React, { Component } from 'react';
import forestVideo from '../../assets/forest.mp4';

class Homepage extends Component {

  componentDidMount () {
    this.refs.video.addEventListener('ended', this.replay.bind(this));
  }

  replay () {
    this.refs.video.currentTime = 0;
    this.refs.video.play();
  }

  render() {
    return (
      <div className="Homepage">
        <h2 className="textTitle">Discover</h2>
        <div className="buttons">
          <a href="/woman">
            THE COLLECTION
          </a>
          &nbsp;
          <a href="/mission">
            THE INITIATIVE
          </a>
        </div>
        <div className='video-container'>
          <video
            ref='video'
            autoPlay
            muted
            style={{objectFit:'cover', width:'100%', height:'100%'}}
            src={forestVideo}
            />
        </div>
      </div>
    );
    // <div className="hero" />
  }
}

export default Homepage;
