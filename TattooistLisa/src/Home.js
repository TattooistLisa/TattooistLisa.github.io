import Header from './components/Header';
import MultiPic from './lisaImages/MultiPic.PNG';
import { useEffect } from 'react';
import { Box } from '@mui/material';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="Home">
          
            <Header />
            <Box
                component="img"
                src={MultiPic}
                alt="Lisa Tattoo Examples"
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />
        </div>
    );
};

export default Home;
