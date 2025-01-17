import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import Page404 from './pages/Page404'
import NovoVideo from './pages/NovoVideo';
import NovaCategoria from './pages/NovaCategoria';
import Footer from './components/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/nuevovideo' element={ <NovoVideo /> }/>
          <Route path='/nuevacategoria' element={ <NovaCategoria /> }/>
          <Route path='*' element={ <Page404/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
