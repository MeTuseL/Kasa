import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

 
function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
 
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            <h2>Question {questionNumber}</h2>
            {questionNumberInt === 10 ?  <Link to="results">Résultats</Link> :
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>}
        </div>
    )
}
export default Survey