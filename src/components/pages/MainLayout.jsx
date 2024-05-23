import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgTextureUrl from '../../assets/bg-texture.png';
import style from './MainLayout.module.scss';

const MainLayout = ({ }) => {
    useEffect(() => {
        // importere 'bg-texture' så den bliver inkluderet i lanceringen
        const bgTexture = document.getElementsByClassName('bg-texture');
        for (let i = 0; i < bgTexture.length; i++) {
            const element = bgTexture[i];
            element.style.backgroundImage = `url("${bgTextureUrl}")`;
        }
    }, []);
    
    return (
        <main className={style.main}>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout