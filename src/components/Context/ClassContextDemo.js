import React from 'react';
import {ThemeContext} from './ThemeContext';

export default class ClassContextDemo extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h2>static contextType</h2>
        <button style={{ background: this.context.background, color: this.context.foreground }}>
          I am styled by theme context!
        </button>
      </div>
    );
  }
}