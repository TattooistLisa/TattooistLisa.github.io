import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout.js'
import Team from './components/Team.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="team" element={<Team/>} />
                    <Route path="*" element="Page Not Found" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
