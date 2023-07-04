import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import {persistor, store}  from "./redux/store";
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants';
import App from 'components/App/App';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <App />
       </PersistGate>
     </Provider>
</ThemeProvider>
);
