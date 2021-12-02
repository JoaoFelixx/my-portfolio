import './App.css'
import { Router } from './Router';
import { Provider } from 'react-redux';
import store from './store'
import 'antd/dist/antd.css';

export const App = () => {
  
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}