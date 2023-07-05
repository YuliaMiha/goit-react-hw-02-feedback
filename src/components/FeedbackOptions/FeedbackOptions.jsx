import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {

    const element = options.map((option) => (
        <li key={option} className={s.list}>
            <button
                className={s.button}
                name={option}
                type="button"
                onClick={onLeaveFeedback}>{option}</button>
        </li>
    ));

    return (
       <ul> {element}</ul>
    )
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
}