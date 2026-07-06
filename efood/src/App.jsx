import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';

import { Provider } from 'react-redux';
import { store } from './store';

import Router from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
        <GlobalStyle />
        <Router /> 
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;