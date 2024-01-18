import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './css/card.module.css'

//component card
function Card({ id, title, cover }) {
  return (
    <article className={styles.container}>
      <Link to={`/logement/${id}`}>
        <img className={styles.container__image} src={cover} alt={title} />
        <h2 className={styles.container__title}>{title}</h2>
      </Link>
    </article>
  )
}
//add type to props
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
export default Card
