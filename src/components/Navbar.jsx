
import { Link } from 'react-router-dom'
import DesktopContent from './mediaQuery/DesktopContent'
import MobileContent from './mediaQuery/MobileContent'
import style from './Navbar.module.scss'

const Navbar = ({ }) => {
    const onHover = (e) => {
        const dropdown = e.target;
        const subMenu = dropdown.firstElementChild.firstElementChild;
        subMenu.style.setProperty('display', 'flex', 'important');
    }
    const onHoverOut = (e) => {
        const dropdown = e.target;
        const subMenu = dropdown.children.item(1);
        subMenu.style.setProperty('display', 'none', 'important');
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
                            <div className={style.subMenuWrapper}>
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