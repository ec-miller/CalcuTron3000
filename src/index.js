import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PaceCalc from './components/pace-calc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: []
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="bck container-fluid">
            <h1>CalcuTron 3000</h1>
          </div>
          <br />
          <div className="container">
            <PaceCalc />
          </div>
        </div>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.querySelector('.legitz'));
