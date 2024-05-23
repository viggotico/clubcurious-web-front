import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgTextureUrl from '../../assets/bg-texture.png';

const MainLayout = ({ }) => {
    useEffect(() => {
        // importere 'bg-texture' så den bliver inkluderet i lanceringen
        const bgTexture = document.getElementsByClassName('bg-texture');
        for (let i = 0; i < bgTexture.length; i++) {
            const element = bgTexture[i];
            element.style.backgroundImage = `url("${bgTextureUrl}")`;
            console.log("element:", element.style.backgroundImage);
        }
    }, []);
    
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout