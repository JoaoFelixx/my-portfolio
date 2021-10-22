import './App.css';
import { Home } from './containers'
import { Provider } from 'react-redux'
import store from './store'
import 'antd/dist/antd.css';

export const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}
