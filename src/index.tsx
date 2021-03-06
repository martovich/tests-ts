import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {splitIntoWords} from "./01-tests/01";
import {dimychTransformator, people} from "./05/05_01";
import {User} from "./06/06-callbacks";

const sentence = "Hello my friends!";
const result = splitIntoWords(sentence);
console.log(result[0] === "hello");
console.log(result[1] === "my");
console.log(result[2] === "friends!");

console.log(people.map(p => dimychTransformator(p)));

ReactDOM.render(
  <React.StrictMode>
    <App />
    <User />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
