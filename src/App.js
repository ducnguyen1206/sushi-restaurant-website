import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/'></Route>
                <Route path='/menu'></Route>
                <Route path='/contact'></Route>
                <Route path='/about'></Route>
            </Routes>
        </Router>
    );
}

export default App;
