import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import dataHousing from '../../data/housingAd.json'

import Tag from '../../components/tag'
import Carrousel from '../../components/carrousel'
import Collapse from '../../components/collapse'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './css/housing.module.css'

//page housing
function Housing() {
  //gets id of housing in url, than gets this datas
  const { idHousing } = useParams()
  const navigate = useNavigate()
  const [isDataHousing, setIsDataHousing] = useState()

  useEffect(() => {
    const data = dataHousing.find((data) => data.id === idHousing)
    data === undefined
      ? navigate('/404', { state: { message: "Can't get data" } }) //navigates to error page if id of housing does not found
      : setIsDataHousing(data)
  }, [idHousing, navigate])

  //rating housing
  const rangeStar = [1, 2, 3, 4, 5]
  const ratingHousing = isDataHousing && parseInt(isDataHousing.rating)

  //split for flex content
  const splitNameHost = isDataHousing && isDataHousing.host.name.split(' ')

  return (
    isDataHousing && (
      <section>
        <Carrousel pictures={isDataHousing.pictures} />
        <div className={styles.container_flex}>
          <div className={styles.container_left}>
            <div className={styles.container_left__site}>
              <h1 className={styles.container_left__site__title}>
                {isDataHousing.title}
              </h1>
              <span className={styles.container_left__site__location}>
                {isDataHousing.location}
              </span>
            </div>
            <div className={styles.container_left__tag}>
              {isDataHousing.tags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} name={tag} />
              ))}
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.container_right__host}>
              <div className={styles.container_right__host__name}>
                {splitNameHost.map((name, index) => (
                  <span key={`${name}-${index}`}>{name}</span>
                ))}
              </div>
              <img
                className={styles.container_right__host__image}
                src={isDataHousing.host.picture}
                alt="Hôte"
              />
            </div>
            <div className={styles.container_right__rating}>
              {rangeStar.map((rangeElem, index) =>
                rangeElem <= ratingHousing ? (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: '#FF6060' }}
                  />
                ) : (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: '#E3E3E3' }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
        <div className={styles.container_collapse}>
          <div className={styles.container_collapse__description}>
            <Collapse title="Description" content={isDataHousing.description} />
          </div>
          <div className={styles.container_collapse__equipements}>
            <Collapse title="Équipements" content={isDataHousing.equipments} />
          </div>
        </div>
      </section>
    )
  )
}

export default Housing
