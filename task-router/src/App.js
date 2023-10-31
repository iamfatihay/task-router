import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
