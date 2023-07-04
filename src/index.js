import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants';
import { Provider } from 'react-redux'
import './index.css';
import {store}  from "./redux/store";


ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
     <Provider store={store}>
       <App />
     </Provider>
</ThemeProvider>
);
