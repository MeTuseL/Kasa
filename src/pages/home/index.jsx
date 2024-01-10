import BannerHome from '../../assets/images/banner_Home.png'
import dataHousing from '../../data/housingAd.json'
import Thumbnail from '../../components/thumbnail'

//styles

//page home
function Home() {
  const data = dataHousing.map((house, index) => {
    return (
      <Thumbnail
        key={`${house.title}-${index}`}
        id={house.id}
        title={house.title}
        cover={house.cover}
      />
    )
  })
  return (
    <main>
      <div>
        <img src={BannerHome} alt="Bannière de l'accueil" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div>{data}</div>
    </main>
  )
}

export default Home
