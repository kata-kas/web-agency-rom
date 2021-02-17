import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';
import * as serviceWorker from './serviceWorkerRegistration';
 // eslint-disable-next-line
import i18n from "./i18n";
import Loading from './pages/Loading';
import App from './app.js';



const rootElement = document.getElementById("root");

ReactDOM.render(
      <Suspense fallback={<Loading/>}>
      <App />
      </Suspense>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
