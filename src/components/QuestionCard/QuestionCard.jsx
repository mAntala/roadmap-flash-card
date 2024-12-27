import './QuestionCard.scss';

export default function QuestionCard({ question, answer, isVisible, showAnswer }) {
    return (
        <div
            className={`question-card ${isVisible ? 'question-card--visible' : ''} ${
                showAnswer ? 'question-card--show-answer' : ''
            }`}
        >
            <div className="question-card__inner">
                <div className="question-card__front">{question}</div>
                <div className="question-card__back">{answer}</div>
            </div>
        </div>
    );
}
