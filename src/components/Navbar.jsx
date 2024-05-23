
import { Link } from 'react-router-dom'
import DesktopContent from './mediaQuery/DesktopContent'
import MobileContent from './mediaQuery/MobileContent'
import style from './Navbar.module.scss'

const Navbar = ({ }) => {
    const onHover = (e) => {
        e.preventDefault();
        const dropdown = e.target;
        const subMenu = dropdown.children[1];
        if (!subMenu) return;
        console.log("dropdown hover");
        subMenu.classList.remove(style.subHidden);
    }
    const onHoverOut = (e) => {
        e.preventDefault();
        const dropdown = e.target;
        const subMenu = dropdown.children[1];
        if (!subMenu) return;
        console.log("dropdown hover out");
        subMenu.classList.add(style.subHidden);
    }
    const onHoverOutSubmenu = (e) => {
        e.preventDefault();
        const subMenu = e.target;
        if (!subMenu) return;
        console.log("dropdown hover out");
        subMenu.classList.add(style.subHidden);
    }
    return (
        <>
            {/* Dette indhold bliver kun genereret i desktop */}
            <DesktopContent>
                <nav className={style.navDesktop}>
                    <ul className={style.menu}>
                        <li><Link to='/'>Hjem</Link></li>
                        <li className={style.dropdown} onMouseOver={onHover} onMouseLeave={onHoverOut}>
                            <Link to='/events'>Events</Link>
                            <div className={style.subMenuWrapper} onMouseLeave={onHoverOutSubmenu}>
                                <ul className={style.subMenu}>
                                    <li><Link to='/events'>Kalender</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </DesktopContent>
            {/* Dette indhold bliver kun genereret i mobile */}
            <MobileContent>
                <nav className={style.navMobile}>
                </nav>
            </MobileContent>
        </>
    )
}

export default Navbar