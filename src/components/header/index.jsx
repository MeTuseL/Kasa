import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_Kasa.png'
import styled from 'styled-components'

//styles
const HomeLogoKasa = styled('img')`
  width: 160px;
  height: 40%;
`
const HeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  padding: 0 30px;
`

const NavContainer = styled('nav')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 160px;
`

const LinkFontSize = styled(Link)`
  font-size: 17px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
//component
function Header() {
  return (
    <header>
      <HeaderContainer>
        <HomeLogoKasa src={logo} alt="Logo de Kasa" />
        <NavContainer>
          {/* <Link to="/">Accueil</Link>
            <Link to="/survey/1">Questionnaire</Link>
            <Link to="/freelances">Freelances</Link> */}
          <LinkFontSize to="/">Accueil</LinkFontSize>
          <LinkFontSize to="/a_propos">A Propros</LinkFontSize>
        </NavContainer>
      </HeaderContainer>
    </header>
  )
}

export default Header
