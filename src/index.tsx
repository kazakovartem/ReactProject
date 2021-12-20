import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/rootReducers';

const Global = createGlobalStyle`
body {
    background-color: #61dafb;
    width: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}
::-webkit-scrollbar {
    width: 2px;
}
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgb(230, 213, 247);
    border-radius: 12px;
}
::-webkit-scrollbar-thumb {
    background: rgb(225, 193, 255);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: rgb(162, 109, 187);
}
`;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Global />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
