import { Link } from 'react-router-dom'
import imgError from '../../assets/images/error404.png'
import styles from './css/error.module.css'

//page error 404
function Error() {
  return (
    <main>
      <div className={styles.container}>
        <img className={styles.image} src={imgError} alt="Erreur 404" />
        <h1 className={styles.title}>
          Oups! La page que vous demandez n'existe pas.
        </h1>
        <Link className={styles.Link} to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  )
}

export default Error
