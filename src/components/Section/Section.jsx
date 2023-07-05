import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children, title }) {
    return (
        
        <div className={s.section}>
            <h1 className="title">{ title}</h1>
            {children}
        </div>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}