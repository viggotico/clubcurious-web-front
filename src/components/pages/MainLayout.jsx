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
        const bgTexture2 = document.getElementsByClassName('bg-texture-2');
        for (let i = 0; i < bgTexture.length; i++) {
            const element = bgTexture[i];
            element.style.backgroundImage = `url("${bgTextureUrl}")`;
        }
        for (let i = 0; i < bgTexture2.length; i++) {
            const element = bgTexture2[i];
            element.style.backgroundImage = `url("${bgTextureUrl}")`;
        }
    }, []);
    
    return (
        <main className={style.main}>
            <Navbar />
            <section className={style.content}>
                <Outlet />
            </section>
            <Footer />
        </main>
    )
}

export default MainLayout