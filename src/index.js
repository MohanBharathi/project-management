import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App';
import {AuthContextProvider} from './context/AuthContext';



const root=ReactDOM.createRoot(document.getElementById('app'));

// to know what is git stash
root.render(
    <AuthContextProvider>
        <App /> 
    </AuthContextProvider>
); 