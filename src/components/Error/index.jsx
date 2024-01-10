import { Link } from 'react-router-dom'
import imgError from '../../assets/images/error404.png'

function Error() {
  return (
    <div>
      <img src={imgError} alt="Erreur 404" />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
