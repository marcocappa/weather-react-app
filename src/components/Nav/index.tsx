import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (): JSX.Element => (
    <nav>
        <Link to="/">Home</Link> <Link to="/forecast">Forecast</Link>
    </nav>
);

export default Nav;
