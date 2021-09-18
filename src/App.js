import './App.css';
import { Home } from './containers'
import { Provider } from 'react-redux'
import store from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}