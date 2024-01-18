import imgBannerHome from '../../assets/images/banner_Home.png'
import dataHousing from '../../data/housingAd.json'
import Card from '../../components/card'
import Banner from '../../components/banner'
import styles from './css/home.module.css'

//page home
function Home() {
  const bannerTitle = 'Chez vous, partout et ailleurs'
  return (
    <section>
      <Banner picture={imgBannerHome} title={bannerTitle} />

      <div className={styles.container}>
        {dataHousing.map((house, index) => (
          <Card
            key={`${house.title}-${index}`}
            id={house.id}
            title={house.title}
            cover={house.cover}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
