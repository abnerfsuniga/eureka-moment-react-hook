import React, { Component } from 'react';

export default class ClassStateDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 2
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Class this.state - prev</h2>
        <button onClick={this.incrementCount}>Two Count {this.state.count}</button>
      </div>
    )
  }
}