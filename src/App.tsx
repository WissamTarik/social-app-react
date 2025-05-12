import { HelmetProvider } from 'react-helmet-async';

import AppTheme from '@components/AppTheme/AppTheme'
import './App.css'
import AppThemeContext from '@context/AppThemeContext/AppThemeContext'
import { Provider } from 'react-redux'
import { persistor, store } from '@redux/store'
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <>
    
    <HelmetProvider>
          <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

    <AppThemeContext>
    <ToastContainer />
    <AppTheme/>
    </AppThemeContext>
    </PersistGate>
    </Provider>
    </HelmetProvider>
    </>
  )
}

export default App
