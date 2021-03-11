import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/redux/rootReducer';
import './index.css';
import App from './App';
import Header from '../src/components/ui/Header';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Header header="Crazy Cards" />
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
