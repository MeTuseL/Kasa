import PropTypes from 'prop-types'
import styles from './css/banner.module.css'

//component banner
function Banner({ picture, title }) {
  const haveTitle = title && (
    <h1 className={styles.container__title}>{title}</h1>
  )
  return (
    <div className={styles.container}>
      <img
        className={styles.container__image}
        src={picture}
        alt="Bannière de Kasa"
      />
      {haveTitle}
    </div>
  )
}
//add type to props
Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string,
}
export default Banner
