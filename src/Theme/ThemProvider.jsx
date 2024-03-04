// ExampleComponent.js
import React from 'react';
// import { useTheme } from './ThemeContext';
import Todo from '../Todo';

const ThemeProvider= () => {
  const { theme, toggleTheme } = Todo();

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <h1>Start to update theme</h1>
      <p>This is some example text.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeProvider;
