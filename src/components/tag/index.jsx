import PropTypes from 'prop-types'

import styles from './css/tag.module.css'

//component tag
function Tag({ name }) {
  return <div className={styles.container}>{name}</div>
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Tag
