import { Link } from 'react-router-dom'
import imgError from '../../assets/images/error404.png'
import styles from './css/error.module.css'

//page error 404
function Error() {
  return (
    <section>
      <div className={styles.container}>
        <img
          className={styles.container__image}
          src={imgError}
          alt="Erreur 404"
        />
        <h1 className={styles.container__title}>
          Oups! La page que vous demandez n'existe pas.
        </h1>
        <Link className={styles.container__Link} to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </section>
  )
}

export default Error
