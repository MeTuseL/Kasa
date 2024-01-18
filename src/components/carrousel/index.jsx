import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './css/carrousel.module.css'

//component carrousel
function Carrousel({ pictures }) {
  //change state of slide, in order to switch picture on the user click
  const listPictures = pictures
  const [slide, setSlide] = useState(0)
  const previousPicture = () => {
    slide === 0 ? setSlide(listPictures.length - 1) : setSlide(slide - 1)
  }
  const nextPicture = () => {
    slide === listPictures.length - 1 ? setSlide(0) : setSlide(slide + 1)
  }

  return (
    <div>
      {/* If a housing has only one image in this gallery, we should not see an arrow */}
      {listPictures.length - 1 === 0 ? (
        <div className={styles.container}>
          <img
            className={styles.container__image}
            src={listPictures[0]}
            alt={`Galerie, numéro ${slide + 1}/${listPictures.length}`}
          />
        </div>
      ) : (
        <div className={styles.container}>
          {/* font awesome with event click*/}
          <div className={`${styles.container__icon} ${styles.flexStart}`}>
            <FontAwesomeIcon
              className={styles.container__icon__awesome}
              onClick={previousPicture}
              icon={faChevronLeft}
            />
          </div>
          <span className={styles.container__totalPicture}>{`${slide + 1}/${
            listPictures.length
          }`}</span>
          <img
            className={styles.container__image}
            src={listPictures[slide]}
            alt={`Galerie, numéro ${slide + 1}/${listPictures.length}`}
          />
          <div className={`${styles.container__icon} ${styles.flexEnd}`}>
            <FontAwesomeIcon
              className={styles.container__icon__awesome}
              onClick={nextPicture}
              icon={faChevronRight}
            />
          </div>
        </div>
      )}
    </div>
  )
}

//add type to props
Carrousel.propTypes = {
  pictures: PropTypes.array.isRequired,
}

export default Carrousel
