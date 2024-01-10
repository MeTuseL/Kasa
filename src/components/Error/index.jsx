import { Link } from 'react-router-dom'
import imgError from '../../assets/images/error404.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const ErrorLogo = styled('img')`
  width: 30%;
  height: 200px;
`
const ErrorContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 100px;
  min-height: 100vh;
}
`
const TitleError = styled('h1')`
  font-size: 28px;
  font-weight: 500;
  color: ${colors.primary};
`

const LinkError = styled(Link)`
  font-size: 17px;
  font-weight: 400;
  text-decoration: underline;
`

function Error() {
  return (
    <ErrorContainer>
      <ErrorLogo src={imgError} alt="Erreur 404" />
      <TitleError>Oups! La page que vous demandez n'existe pas.</TitleError>
      <LinkError to="/">Retourner sur la page d’accueil</LinkError>
    </ErrorContainer>
  )
}

export default Error
