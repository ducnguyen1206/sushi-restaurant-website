import Introduction from '../components/body/Introduction';
import background from '../img/backround.png';

function Home({ navbarExtended }) {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'block',
        backgroundPosition: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <Introduction isUpdate={navbarExtended} />
        </div>
    );
}

export default Home;
