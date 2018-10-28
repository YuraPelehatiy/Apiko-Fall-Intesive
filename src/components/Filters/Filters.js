import React from 'react';
import s from './Filters.module.css';
import { Link, withRouter } from 'react-router-dom';

const Filters = ({ match }) => {
    return(
        <div className = {s.filters}>
            <Link to = {`${match.url}/all`}>All</Link>
            <Link to = {`${match.url}/completed`}>Completed</Link>
            <Link to = {`${match.url}/incompleted`}>Incompleted</Link>
        </div>
    );
}

export default withRouter(Filters);