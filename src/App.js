import './App.css';
import './fonts/font.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import HeaderSwiper from './components/HeaderSwiper/HeaderSwiper';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <HeaderSwiper />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
