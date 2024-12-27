import './ProgressBar.scss';

export default function ProgressBar({ step, totalSteps }) {
    const stepPercentage = (step / totalSteps) * 100;

    return (
        <div className="progress-bar">
            <div className="progress-bar__numbers">
                <div className="progress-bar__percentage">
                    {parseFloat(stepPercentage).toFixed(2)} %
                </div>
                <div className="progress-bar__step">
                    {step} / {totalSteps}
                </div>
            </div>
            <div className="progress-bar__container">
                <div className="progress-bar__fill" style={{ width: `${stepPercentage}%` }}></div>
            </div>
        </div>
    );
}
