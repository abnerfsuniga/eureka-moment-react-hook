import React, { Component } from 'react'

export default class ClassLifeCicleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  render() {
    return (
      <div>
        <h2>DidMount DidUpdate</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me {this.state.count}
        </button>
      </div>
    );
  }
}