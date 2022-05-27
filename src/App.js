import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'


function App() {
  const store = ConfigureStore()
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
