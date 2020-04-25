import React, { Component } from "react";
import "./component.css";
import moment from "moment";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = this.counter();
  }

  counter = () => {
    const timeTillDate = this.props.finalDate;
    const timeFormat = "DD-MM-YYYY HH:mm";
    const then = moment(timeTillDate, timeFormat);
    const now = moment();

    const totalSeconds = then.diff(now, "seconds");
    if (totalSeconds <= 0) {
      clearInterval(this.interval);
      return { isCompleted: true };
    }

    const totalMinutes = totalSeconds / 60;
    const seconds = totalSeconds % 60;

    const totalHours = totalMinutes / 60;
    const minutes = Math.trunc(totalMinutes % 60);

    const days = Math.trunc(totalHours / 24);
    const hours = Math.trunc(totalHours % 24);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("timer is running");
      this.setState(this.counter());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.isCompleted === true) {
      return (
        <div className="completed-countdown">This is an Awesomw Website!</div>
      );
    }
    return (
      <div className="main-container">
        <div className={this.props.theme}>
          <div className="left-container">
            <div className="label head">Days {this.state.days}</div>
            <div className="label">Hours {this.state.hours}</div>
            <div className="label">Minutes {this.state.minutes}</div>
            <div className="label">Seconds {this.state.seconds}</div>
          </div>
        </div>

        <div className="right-container">
          <div className="title">{this.props.title}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Countdown;
