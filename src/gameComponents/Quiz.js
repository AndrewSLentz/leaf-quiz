import { Button } from '@material-ui/core';

function Quiz ({ 
    playerName,
    questions, 
    questionIndex, 
    answers, 
    setAnswers, 
    setQuestionIndex, 
    correctAnswers, 
    setCorrectAnswers,
    handleNewGame }) {

    const currentQuestion = questions[questionIndex];
    
    const handleResponse = answer => {
        if (answer === currentQuestion.answer) setCorrectAnswers(correctAnswers + 1);
        setAnswers(answers => [...answers, answer]);
        setQuestionIndex(questionIndex + 1);
    };

    return (
        questionIndex < questions.length
            ? <div className="quiz__container">
                <h1>{`Question ${questionIndex + 1}`}</h1>
                <h2>{ currentQuestion.questionText }</h2>
                <div className="answer-button__container">
                    {
                        currentQuestion.choices.map((answer, i) => {
                            return (
                                <Button key={ answer } classes={{ root: 'answer-button' }} size="large" variant="outlined" color="primary" onClick={ () => handleResponse(answer) }>{ answer }</Button>
                            )
                        })
                    }
                </div>
            </div>
            : <div className="results__container">
                <h2>{`You answered ${correctAnswers}/${questionIndex} questions correctly!`}</h2>
                {
                    questions.map((question, i) => {
                        const answerCorrect = answers[i] === question.answer ? true : false;
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
    )
}

export default Quiz;