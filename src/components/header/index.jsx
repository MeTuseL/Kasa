import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_Kasa.png'
import styles from './css/header.module.css'

//component header
function Header() {
  //add underline style if the link page is active or not
  const isActiveNav = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  })
  return (
    <header>
      <div className={styles.container}>
        <img
          className={styles.container__image}
          src={logo}
          alt="Logo de Kasa"
        />
        <nav className={styles.container__nav}>
          <NavLink
            className={styles.container__nav__NavLink}
            to="/"
            style={isActiveNav}
          >
            Accueil
          </NavLink>
          <NavLink
            className={styles.container__nav__NavLink}
            to="/a_propos"
            style={isActiveNav}
          >
            A Propros
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
