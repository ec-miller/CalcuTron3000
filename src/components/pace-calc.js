import _ from 'lodash';
import React, { Component } from 'react';

export default class PaceCalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timemin: '0',
      timesec: '0',
      distance: '0',
      pacemin: '0',
      pacesec: '0',
      speed: '0'
    }

    this.calcPace = _.debounce(this.calcPace, 100);
  }

  onEventChange(id,value) {
    this.setState({[id]: value});
    this.calcPace();
  }

  calcPace() {
    // console.log('Time: ' + this.state.timemin + this.state.timesec + ' Distance: ' + this.state.distance)
    if ((this.state.timemin == false && this.state.timesec == false) || this.state.distance == false) {
      this.setState({pacemin: '0', pacesec: '0'});
      return
    }
    else {
      let tm = parseInt(this.state.timemin);
      let ts = parseInt(this.state.timesec);
      let t = tm + (ts/60);
      let d = parseFloat(this.state.distance);
      let p = t / d;
      let pacemin = Math.floor(p)
      let pacesec = Math.floor((p - Math.floor(p)) * 60)
      let speed = (d / (t / 60)).toFixed(2)
      this.setState({pacemin: pacemin, pacesec:pacesec, speed: speed});
    }
  }

  render() {
    return (
      <div className="form-row">
        <h3>Enter time and distance to get pace!</h3>
        <br></br>
        <div className="form-group">
          <div className="col-md-3 col-xs-12 noPad">
            <div className="col-md-6 col-xs-6">
              <label htmlFor="timemin">Time</label>
              <input
                value={this.state.timemin}
                onChange={event => this.onEventChange(event.target.id,event.target.value)}
                type="number" className="form-control" id="timemin"></input>
              <small className="form-text text-muted">Minutes</small>
            </div>
            <div className="col-md-6 col-xs-6">
              <label htmlFor="timesec" className="poof"> - </label>
              <input
                value={this.state.timesec}
                onChange={event => this.onEventChange(event.target.id,event.target.value)}
                type="number" className="form-control" id="timesec"></input>
              <small className="form-text text-muted">Seconds</small>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <label htmlFor="distance">Distance</label>
            <input
              value={this.state.distance}
              onChange={event => this.onEventChange(event.target.id,event.target.value)}
              type="number" className="form-control" id="distance"></input>
            <small className="form-text text-muted">Enter miles</small>
          </div>
          <div className="col-md-3 col-xs-12 noPad">
            <div className="col-md-6 col-xs-6">
              <label htmlFor="pacemin">Pace</label>
              <input
                value={this.state.pacemin}
                onChange={event => this.onEventChange(event.target.id,event.target.value)}
                type="number" className="form-control" id="pacemin"></input>
              <small className="form-text text-muted">Minutes</small>
            </div>
            <div className="col-md-6 col-xs-6">
              <label htmlFor="pacesec" className="poof"> - </label>
              <input
                value={this.state.pacesec}
                onChange={event => this.onEventChange(event.target.id,event.target.value)}
                type="number" className="form-control" id="pacesec"></input>
              <small className="form-text text-muted">Seconds</small>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <label htmlFor="speed">Speed</label>
            <input
              value={this.state.speed}
              onChange={event => this.onEventChange(event.target.id,event.target.value)}
              type="number" className="form-control" id="speed"></input>
            <small className="form-text text-muted">Miles Per Hour</small>
          </div>
        </div>
      </div>
    );
  }
}
