import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    // console.log(positivePercentage);
    
    return  (
        <div className={s.statistics}>
          <p className={s.statistics__text}>Good: {good}</p>
          <p className={s.statistics__text}>Neutral: {neutral}</p>
          <p className={s.statistics__text}>Bad: {bad}</p>
          <p className={s.statistics__text}>Total: {total}</p>
          <p className={s.statistics__text}>Positive feedback: {positivePercentage === 'NaN' ? "0" : positivePercentage}%</p>
        </div>
      ) 
}

export default Statistics;

Statistics.propTypes = {
   good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,/*?? */

}