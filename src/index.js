import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Component/variable/redux-store';



let renderPage = (variable) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App variable={variable} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderPage(store.getState());

store.subscribe( () => {
    let variable = store.getState();
    renderPage(variable);
});