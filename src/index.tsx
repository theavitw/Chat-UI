import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from '../public/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = '/serviceWorker.ts'; // Replace this with your service worker path

    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('Service worker registered:', registration);
      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  });
}