import { useParams } from 'react-router-dom'
import dataHousing from '../../data/housingAd.json'

//styles
//page housing
function Housing() {
  const { idHousing } = useParams()
  const isDataHousing = dataHousing.find((data) =>
    data.id === idHousing ? data : null,
  )

  return <p>Titre du logement : {isDataHousing.title}</p>
}

export default Housing
