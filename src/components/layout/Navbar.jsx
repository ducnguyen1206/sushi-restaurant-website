import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='site-title'>
                    SUSHI RESTAURANT
                </Link>
                <ul>
                    <Link to='/'>SUSHI RESTAURANT</Link>
                    <Link to='/'>SUSHI RESTAURANT</Link>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
