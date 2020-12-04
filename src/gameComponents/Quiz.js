import Results from './Results';
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
            : <Results 
                playerName={ playerName } 
                questions={ questions } 
                questionIndex={ questionIndex } 
                answers={ answers } 
                correctAnswers={ correctAnswers } 
                handleNewGame={ handleNewGame } 
            />
    )
}

export default Quiz;