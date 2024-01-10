import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_Kasa.png'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        {/* <Link to="/">Accueil</Link>
            <Link to="/survey/1">Questionnaire</Link>
            <Link to="/freelances">Freelances</Link> */}
        <Link to="/">Accueil</Link>
        <Link to="/a_propos">A Propros</Link>
      </nav>
    </header>
  )
}

export default Header
