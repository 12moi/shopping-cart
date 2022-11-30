import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/Theme'
import store from './state/store/store'
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot( document.getElementById("root") );
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
 
)


