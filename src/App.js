import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import './styles.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
        </Router>
    );
}

export default App;
