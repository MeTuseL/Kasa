import Collapse from '../../components/collapse'
import Banner from '../../components/banner'
import imgBannerAbout from '../../assets/images/banner_about.png'
import dataAbout from '../../data/about.json'
import styles from './css/about.module.css'

//page about
function About() {
  return (
    <section>
      <Banner picture={imgBannerAbout} />

      <div className={styles.container}>
        {dataAbout.map((data, index) => (
          <Collapse
            key={`${data.title}-${index}`}
            title={data.title}
            content={data.description}
          />
        ))}
      </div>
    </section>
  )
}

export default About
