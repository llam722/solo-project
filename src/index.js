require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
// import ReactDOM from 'react-dom';
import {App} from './App';
import { createRoot } from 'react-dom/client';
import './App.scss';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(<App />);
