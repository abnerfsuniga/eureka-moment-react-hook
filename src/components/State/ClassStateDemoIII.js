import React, { Component } from 'react';

export default class ClassStateDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      a: 1,
      b: 2
    }
  }

  incrementA = () => {
    this.setState(prevState => ({
      a: prevState.a + 1
    }))
  }

  render() {
    return (
      <div>
        <h2>Class this.state - object</h2>
        <button onClick={this.incrementA}>Increment a: {this.state.a} b: {this.state.b}</button>
      </div>
    )
  }
}