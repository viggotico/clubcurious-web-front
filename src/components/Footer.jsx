import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import style from './Footer.module.scss'
import useTranslation from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

const Footer = ({ }) => {
    const translation = useTranslation();
    
    return (
        <footer className={style.main}>
            <div className='bg-texture-2'></div>
            <div className={style.content}>
                <div className={style.socials}>
                    <h4>{translation.get('footer', 'socials')}</h4>
                    <div>
                        <a href="https://www.facebook.com/clubcurious/" target='_blank'><FacebookIcon /></a>
                        <a href="https://www.instagram.com/club.curious" target='_blank'><InstagramIcon /></a>
                    </div>
                </div>
                <ul className={style.nav}>
                    <h4>Info</h4>
                    <li><Link to='/contact'>{translation.get('navbar', 'contact')}</Link></li>
                    <li><p>Code of Conduct</p></li>
                    <li><p>{translation.get('footer', 'newsletter')}</p></li>
                </ul>
                <div className={style.address}>
                    <h4>{translation.get('footer', 'address')}</h4>
                    <p>Jægergårdsgade 154e</p>
                    <p>8000 Aarhus</p>
                    <p className={style.hidden}>hidden</p>
                </div>
                <div className={style.logo}>
                    <Link to='/'><img src="logo.png" alt="" /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer