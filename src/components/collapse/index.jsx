import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'
import styles from './css/collapse.module.css'

//component collapse
function Collapse({ title, content }) {
  //change state of collapse. if he's open or no, on user click
  const [isOpen, setOpen] = useState(false)
  const rotateIcon = isOpen && 'rotate(180deg)'
  const stylesHideShow = isOpen
    ? styles.container__show
    : styles.container__hide

  //gets current height of content for slide animation
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null)
  const currentHeight = isOpen ? `${height}px` : '0px'

  useEffect(() => {
    setHeight(elementRef.current.clientHeight)
  }, [])

  //check if content is a object, in order to display it as list
  const isContent =
    typeof content === 'object'
      ? content.map((elem, index) => <li key={`${elem}-${index}`}>{elem}</li>)
      : content

  return (
    <div className={styles.container}>
      {/*event click*/}
      <div
        className={styles.container__header}
        onClick={() => setOpen(!isOpen)}
      >
        <span className={styles.container__header__title}>{title}</span>
        {/*font awesome*/}
        <FontAwesomeIcon
          className={styles.container__header__icon}
          style={{ transform: rotateIcon }}
          icon={faChevronUp}
        />
      </div>
      <div className={stylesHideShow} style={{ height: currentHeight }}>
        {/*get ref element*/}
        <p ref={elementRef} className={styles.container__showHide__content}>
          {isContent}
        </p>
      </div>
    </div>
  )
}

//add type to props
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
}

export default Collapse
