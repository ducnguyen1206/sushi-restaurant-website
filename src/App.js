import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import { AppProvider } from './context/AppContext';

import './index.css';

function App() {
    const [navbarExtended, setNavbarExtended] = useState(false);
    return (
        <AppProvider>
            <Router>
                <Navbar isNavbarExtend={setNavbarExtended} />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Home navbarExtended={navbarExtended} />
                                <Reservation />
                            </>
                        }
                    ></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </Router>
        </AppProvider>
    );
}

export default App;
