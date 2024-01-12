import imgBannerHome from '../../assets/images/banner_Home.png'
import dataHousing from '../../data/housingAd.json'
import Thumbnail from '../../components/thumbnail'
import Banner from '../../components/banner'
import styles from './css/home.module.css'

//page home
function Home() {
  const bannerTitle = 'Chez vous, partout et ailleurs'
  return (
    <main>
      <Banner picture={imgBannerHome} title={bannerTitle} />
      <div className={styles.container}>
        {dataHousing.map((house, index) => (
          <Thumbnail
            key={`${house.title}-${index}`}
            id={house.id}
            title={house.title}
            cover={house.cover}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
