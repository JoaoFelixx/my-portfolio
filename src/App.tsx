import { SettingsProvider } from 'Context/SettingsProvider';
import { GlobalStyle } from 'styles';
import { IconContext } from 'react-icons';
import { ToastContainer } from 'react-toastify';
import Routes from 'Router';

function App() {
  return (
    <SettingsProvider>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover />
      <IconContext.Provider value={{ size: '28px', color: '#fff', className: "global-class-name" }} >
        <Routes />
      </IconContext.Provider>
    </SettingsProvider>
  )
}

export default App;