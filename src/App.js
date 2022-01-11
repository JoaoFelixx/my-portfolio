import './App.css';
import Router from './Router';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';

import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
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
      <Router />
    </Provider>
  );
}

export default App;