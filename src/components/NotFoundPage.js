import React from 'react';
import { Link } from 'react-router-dom';

//Link instead of <a> to use links so the page doesnt have to refesh on every request
const NotFoundPage = () => (
    <div>
        404 - <Link to='/'>Go Home!</Link>
    </div>
);


export default NotFoundPage;