import React, { useState, useEffect } from "react";
import axios from 'axios';
import NameInput from './gameComponents/NameInput';
import Quiz from './gameComponents/Quiz';

const Game = () => {
    const [shouldReload, setShouldReload] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [questionIndex, setQuestionIndex] = useState(-1);
    const [answers, setAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const getQuestions = async () => {
        try {
            const quiz = await axios.get('http://34.220.149.42/questions.json');
            setQuestions(quiz.data);
        } catch (error) {
            console.error(error);
        }      
    }

    const handleNewGame = () => {
        setQuestionIndex(-1);
        setAnswers([]);
        setPlayerName('');
        setCorrectAnswers(0);
        setQuestions([]);
        setShouldReload(true);
    }

    useEffect(() => {
        if (shouldReload) {
            getQuestions();
            setShouldReload(false);    
        }
    }, [shouldReload])

    return (
        <div className="game__container">
            { questionIndex === -1
                ? <NameInput 
                    playerName={ playerName } 
                    setPlayerName={ setPlayerName } 
                    setQuestionIndex={ setQuestionIndex } 
                />
                : <Quiz 
                    playerName={ playerName }
                    questions={ questions } 
                    questionIndex={ questionIndex }
                    answers={ answers }
                    setAnswers={ setAnswers } 
                    setQuestionIndex={ setQuestionIndex } 
                    correctAnswers={ correctAnswers} 
                    setCorrectAnswers={ setCorrectAnswers }
                    handleNewGame={ handleNewGame }
                />
            }
        </div>
    )
}

export default Game;