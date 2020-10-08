import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {DefaultButton} from 'office-ui-fabric-react';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
      <DefaultButton>Open Panel</DefaultButton>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
