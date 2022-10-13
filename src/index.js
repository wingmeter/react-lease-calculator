import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import App from './App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>
)

const devMode = process.env.NODE_ENV === 'development'
if (devMode && module && module.hot) {
   module.hot.accept()
}
