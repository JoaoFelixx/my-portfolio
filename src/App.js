import './App.css'
import { Router } from './Router';
import { Provider } from 'react-redux';
import store from './store'
import 'antd/dist/antd.css';

function App () {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;