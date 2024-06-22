import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {css, Global} from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Global
            styles={css`
                body {
                  margin: 0;
                }
            `}
        />
        <App />
    </div>
);

