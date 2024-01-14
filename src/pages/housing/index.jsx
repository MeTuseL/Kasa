import { useParams } from 'react-router-dom'
import dataHousing from '../../data/housingAd.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
// import Tag from '../../components/tag'
import styles from './css/housing.module.css'

//page housing
function Housing() {
  //gets id of housing in url, than gets this datas
  const { idHousing } = useParams()
  const isDataHousing = dataHousing.find((data) =>
    data.id === idHousing ? data : null,
  )
  // -- carrousel --
  //change state of slide, in order to switch picture on the user click
  const listPictures = isDataHousing.pictures
  const [slide, setSlide] = useState(0)
  const previousPicture = () => {
    slide === 0 ? setSlide(listPictures.length - 1) : setSlide(slide - 1)
  }
  const nextPicture = () => {
    slide === listPictures.length - 1 ? setSlide(0) : setSlide(slide + 1)
  }

  return (
    <section>
      <div>
        {/* If a housing has only one image in this gallery, we should not see an arrow */}
        {listPictures.length - 1 === 0 ? (
          <div className={styles.carrousel_container}>
            <img
              className={styles.carrousel_image}
              src={listPictures[0]}
              alt="Galerie"
            />
          </div>
        ) : (
          <div className={styles.carrousel_container}>
            {/* font awesome with event click*/}
            <FontAwesomeIcon
              className={styles.carrousel_icon}
              onClick={previousPicture}
              icon={faChevronLeft}
            />
            <img
              className={styles.carrousel_image}
              src={listPictures[slide]}
              alt={'Galerie, photo numéro ' + (slide + 1)}
            />
            <FontAwesomeIcon
              className={styles.carrousel_icon}
              onClick={nextPicture}
              icon={faChevronRight}
            />
          </div>
        )}
        {/* <div className={styles.title}>
          <div className={styles.title_container}>
            <h1>{isDataHousing.title}</h1>
            <span>{isDataHousing.location}</span>
          </div>
          <div>
            {isDataHousing.tags.map((tag,index) => 
              <Tag 
               
              />
            )}
           
          </div>
          </div>
          <div>
            <span>{isDataHousing.host.name}</span>
            <img src={isDataHousing.host.picture} alt="Hôte" />
          </div> */}
      </div>
    </section>
  )
}

export default Housing
