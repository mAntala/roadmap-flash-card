import './App.scss';

import { useState } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import QuestionCard from './components/QuestionCard/QuestionCard';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
    const [step, setStep] = useState(1);
    const [showAnswer, setShowAnswer] = useState(false);

    const onStepChange = (newStep) => {
        if (newStep < 1 || newStep > questions.length) {
            return;
        }
        setStep(newStep);
    };

    const onShowAnswerChange = () => {
        setShowAnswer(!showAnswer);
    };

    const questions = [
        {
            title: 'Question 1',
            answer: 'Answer 1',
        },
        {
            title: 'Question 2',
            answer: 'Answer 2',
        },
        {
            title: 'Question 3',
            answer: 'Answer 3',
        },
        {
            title: 'Question 4',
            answer: 'Answer 4',
        },
        {
            title: 'Question 5',
            answer: 'Answer 5',
        },
        {
            title: 'Question 6',
            answer: 'Answer 6',
        },
    ];

    return (
        <div className="flash-cards">
            <h1>Flash Cards</h1>
            <div className="flash-cards__content">
                <ProgressBar step={step} totalSteps={questions.length} />
                <div className="flash-cards__questions">
                    {questions.map((question, index) => (
                        <QuestionCard
                            key={index}
                            question={question.title}
                            answer={question.answer}
                            isVisible={index + 1 === step}
                            showAnswer={showAnswer}
                        />
                    ))}
                </div>
                <NavigationBar
                    step={step}
                    totalSteps={questions.length}
                    onStepNextChange={() => onStepChange(step + 1)}
                    onStepPrevChange={() => onStepChange(step - 1)}
                    onShowAnswerChange={onShowAnswerChange}
                />
            </div>
        </div>
    );
}

export default App;
