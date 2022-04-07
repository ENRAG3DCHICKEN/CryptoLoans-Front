import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";

// Added Create React App Buildpack on Heroku (via Settings on Heroku Site)
// Buildpack for React App
// https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


