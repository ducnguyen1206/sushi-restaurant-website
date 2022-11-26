import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/reservation' element={<Reservation />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
