import { MysticalProvider } from 'mystical';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import theme from './theme.js';

ReactDOM.render(
  <React.StrictMode>
    <MysticalProvider theme={theme}>
      <App />
    </MysticalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
