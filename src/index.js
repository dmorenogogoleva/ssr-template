import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// render may change your node if there is a difference 
// between the initial DOM and the current DOM. 
// hydrate will only attach event handlers.

ReactDOM.hydrateRoot(document.getElementById('root'), <App />);

// for common render 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
