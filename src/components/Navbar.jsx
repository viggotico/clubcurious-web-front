import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Translation from '../statics/Translation'
import DesktopContent from './mediaQuery/DesktopContent'
import MobileContent from './mediaQuery/MobileContent'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import LanguageIcon from '@mui/icons-material/Language';
import style from './Navbar.module.scss'
import useTranslation from '../hooks/useTranslation';

// Komponent som tjekker om nav elementet skal være aktiv (rød farve)
// for at vise at det er den nuværende side man er på
const MenuLink = ({ children, to }) => {
    const className = to.includes('#') ? '' : style.active; // tjekker om linket til nav elementet er en id (hashtag)
    return (
        <NavLink
            to={to} // Nav elementets URL
            className={({ isActive }) => isActive ? className : ''} // tjekker om nav elementet er aktivt
        > 
            {children}
        </NavLink>
    )
}

// Komponent til dropdown menuer så man ikke skal skrive HTML'et flere gange
// da HTML'et er ens for alle dropdown menuer
const Dropdown = ({ children, to, name }) => {
    return (
        <li className={style.dropdown}>
            <MenuLink to={to}>
                {name} 
                <div className={style.iconWrapper}>
                    {/* 'ExpandCircleDownIcon' er en komponent til SVG ikonet til dropdown menuen */}
                    <ExpandCircleDownIcon />
                </div>
            </MenuLink>
            <div className={style.subMenuWrapper}>
                <ul className={style.subMenu}>
                    {children}
                </ul>
            </div>
        </li>
    )
}

// Komponent til 
const Navbar = ({ }) => {
    const translation = useTranslation();
    const navItemName = (id = "home") => translation.get('navbar', id);
    const changeLangage = (e) => {
        e.preventDefault();
        Translation.set(translation.isDk() ? 'EN' : 'DK');
    }
    return (
        <>
            {/* Dette indhold bliver kun genereret i desktop */}
            <DesktopContent>
                <nav className={style.navDesktop}>
                    <div className='bg-texture-2'></div>
                    <div className={style.menuWrapper}>
                        <div className={style.logo}>
                            <Link to='/'><img src="logo.png" alt="Logo" /></Link>
                        </div>
                        <ul className={style.menu}>
                            <li><MenuLink to='/' >{navItemName('home')}</MenuLink></li>
                            <Dropdown to='/events' name={navItemName('events')}>
                                <li><MenuLink to='/events#billetto'>{navItemName('calender')}</MenuLink></li>
                            </Dropdown>
                            <Dropdown to='/collab' name={navItemName('collab')}>
                                <li><MenuLink to='/collab#community'>{navItemName('community')}</MenuLink></li>
                                <li><MenuLink to='/collab#sponsor'>{navItemName('sponsor')}</MenuLink></li>
                            </Dropdown>
                            <Dropdown to='/about' name={navItemName('about')}>
                                <li><MenuLink to='/about#hours'>{navItemName('hours')}</MenuLink></li>
                                <li><MenuLink to='/about#gallery'>{navItemName('gallery')}</MenuLink></li>
                                <li><MenuLink to='/about#address'>{navItemName('address')}</MenuLink></li>
                            </Dropdown>
                            <li><MenuLink to='/contact'>{navItemName('contact')}</MenuLink></li>
                            <div className={style.divider}></div>
                            <li className={style.language} onClick={changeLangage}><span>{translation.language}</span><LanguageIcon /></li>
                        </ul>
                    </div>
                </nav>
            </DesktopContent>
            {/* Dette indhold bliver kun genereret i mobile */}
            <MobileContent>
                <nav className={style.navMobile}>
                    <div className='bg-texture'></div>
                </nav>
            </MobileContent>
        </>
    )
}

export default Navbar