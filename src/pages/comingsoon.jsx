//import plugin
import React from 'react';

//import style
import "../styles/coming.css"

//import component
import Header from '../component/header';

//c
class ComingSoon extends React.Component{
    constructor() {
      super();
      this.state = { time: {}, seconds: 5 };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime = (secs) => {
      var days = Math.floor(secs / (60 * 60 * 24));

      let divisor_for_hours = secs % (60 * 60 * 24);
      let hours = Math.floor(divisor_for_hours / (60 * 60));
  
      let divisor_for_minutes = divisor_for_hours % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "d": days,
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount = async() => {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer = () => {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown = () => {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds === 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      this.startTimer()
      return(
        <div className="coming">
          <Header/>
          <div className="come">
            <p className="soon" style={{color: "white"}}>Coming Soon</p>
            <hr/>
            <div className="cooldown" style={{color:"white"}}>
              {this.state.time.d}d {this.state.time.h}h {this.state.time.m}m {this.state.time.s}s
            </div>
          </div>
        </div>
      );
    }
  }
export default ComingSoon;