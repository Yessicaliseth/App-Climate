import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Climate from './components/Climate';


const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement)
root.render(
     <Climate />
);


