import React, { Component } from 'react';

export default class ClassStateDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Class this.state</h2>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}