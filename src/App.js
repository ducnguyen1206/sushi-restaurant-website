import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';
import Order from './pages/Order';

import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reservation' element={<Reservation />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
