import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './css/thumbnail.module.css'

//component thumbnail
function Thumbnail(props) {
  const { id, title, cover } = props
  return (
    <article className={styles.article}>
      <Link to={`/housing/${id}`}>
        <img className={styles.image} src={cover} alt={title} />
        <h2 className={styles.title}>{title}</h2>
      </Link>
    </article>
  )
}
//add type to props
Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
export default Thumbnail
