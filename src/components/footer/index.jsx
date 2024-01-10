import logoFooter from '../../assets/images/logo_Kasa_Footer.png'
import styled from 'styled-components'

const FooterLogoKasa = styled('img')`
  width: 130px;
  height: 25%;
`
const FooterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 200px;
  background-color: black;
`
const SpanFooter = styled('p')`
  font-size: 17px;
  font-weight: 400;
  color: white;
`

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterLogoKasa src={logoFooter} alt="Logo de Kasa" />
        <SpanFooter>© 2020 Kasa. All rights reserved</SpanFooter>
      </FooterContainer>
    </footer>
  )
}
export default Footer
