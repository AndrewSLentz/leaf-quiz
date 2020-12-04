import { Button } from '@material-ui/core';

function Results ({ 
    playerName,
    questions, 
    questionIndex, 
    answers, 
    correctAnswers, 
    handleNewGame }) {

    return (
        questions.length
            ? <div className="results__container">
                <h2>{`You answered ${correctAnswers}/${questionIndex} questions correctly!`}</h2>
                {
                    questions.map((question, i) => {
                        const answerCorrect = answers[i] === question.answer;
                        return (
                            <div key={ question.answer } className="result__block">
                                <h4>{ `Question ${i + 1} was: ${question.questionText}` }</h4>
                                <div className="result__answer">
                                    { `The correct answer was "${question.answer}"` }
                                </div>
                                <div>
                                    You said: <strong className={answerCorrect ? "result__correct" : "result__incorrect" }>"{answers[i]}"{answerCorrect ? '!' : '.'}</strong>`
                                </div>
                            </div>
                        )
                    })
                }
                <h2>Thanks for playing, {playerName}!</h2>
                <Button size="large" color="primary" onClick={ () => handleNewGame() }>Click here to play again!</Button>
            </div>
            : <div className="error__container">
                <h2 className="result__incorrect">Error loading questions</h2>
                <Button size="large" color="primary" onClick={ () => handleNewGame() }>Click here to try again</Button>
            </div>
    )
}

export default Results;