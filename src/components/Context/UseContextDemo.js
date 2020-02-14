import React, { useContext } from 'react';
import {ThemeContext} from './ThemeContext';

export default function UseContextDemo() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>useContext</h2>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context too!
      </button>
    </div>
  );
}