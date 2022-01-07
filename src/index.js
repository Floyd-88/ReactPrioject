import store from './Component/variable/variable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let renderPage = (variable) => {
ReactDOM.render(
  <React.StrictMode>
    <App variable={variable} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>,
  document.getElementById('root')
);
}

renderPage(store.getVariable());
store.subscribe(renderPage);