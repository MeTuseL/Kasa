import PropTypes from 'prop-types'
import styles from './css/banner.module.css'

//component banner
function Banner(props) {
  const { picture, title } = props
  return (
    <div className={styles.container}>
      <img className={styles.image} src={picture} alt="Bannière de Kasa" />
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
//add type to props
Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default Banner
