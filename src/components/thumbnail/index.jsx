import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//styles

//component
function Thumbnail(props) {
  const { id, title, cover } = props
  return (
    <article>
      <Link to={`/housing/${id}`}>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </article>
  )
}
Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
export default Thumbnail
