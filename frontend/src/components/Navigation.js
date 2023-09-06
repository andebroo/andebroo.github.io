import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Web Development Topics</Link>
        <Link to="/goals">2023 FIFA Women's World Cup</Link>
    </nav>
  );
}

export default Navigation;
