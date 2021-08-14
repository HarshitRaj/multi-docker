import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div> 
            In some other Page!
            <Link to="/">Back Home</Link>
        </div>
    );
};