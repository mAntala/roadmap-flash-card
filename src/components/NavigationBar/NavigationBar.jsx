import './NavigationBar.scss';

export default function NavigationBar({
    step,
    totalSteps,
    onStepNextChange,
    onStepPrevChange,
    onShowAnswerChange,
}) {
    return (
        <div className="navigator-bar">
            <button
                className="navigator-bar__button"
                onClick={onStepPrevChange}
                disabled={step === 1}
            >
                Previous
            </button>
            <button className="navigator-bar__show-button" onClick={onShowAnswerChange}>
                Show answer
            </button>
            <button
                className="navigator-bar__button"
                onClick={onStepNextChange}
                disabled={step === totalSteps}
            >
                Next
            </button>
        </div>
    );
}
