import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_Kasa.png'
import styles from './css/header.module.css'

//component header
function Header() {
  //add underline style if the link is active or not
  const isActiveNav = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  })
  return (
    <header>
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="Logo de Kasa" />
        <nav className={styles.nav}>
          <NavLink className={styles.NavLink} to="/" style={isActiveNav}>
            Accueil
          </NavLink>
          <NavLink
            className={styles.NavLink}
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
