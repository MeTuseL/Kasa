import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'
import styles from './css/collapse.module.css'

//component collapse
function Collapse(props) {
  const { title, content } = props

  //change state of collapse. if he's open or no on user click
  const [isOpen, setOpen] = useState(false)
  const rotateIcon = isOpen && 'rotate(180deg)'
  const stylesHideShow = isOpen ? styles.contentShow : styles.contentHide

  //get current height of content for slide animation
  const [height, setHeight] = useState(0)
  const elementRef = useRef(null)
  const currentHeight = isOpen ? `${height}px` : '0px'

  useEffect(() => {
    setHeight(elementRef.current.offsetHeight)
  }, [])

  return (
    <div className={styles.container}>
      {/*event click*/}
      <div className={styles.header} onClick={() => setOpen(!isOpen)}>
        <span className={styles.title}>{title}</span>
        {/*font awesome*/}
        <FontAwesomeIcon
          className={styles.icon}
          style={{ transform: rotateIcon }}
          icon={faChevronUp}
        />
      </div>
      <div className={stylesHideShow} style={{ height: currentHeight }}>
        {/*get ref element*/}
        <p ref={elementRef} className={styles.content}>
          {content}
        </p>
      </div>
    </div>
  )
}

//add type to props
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Collapse
