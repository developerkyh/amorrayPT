import { NavLink } from 'react-router-dom';
import { Nav } from 'components';

export { Top };

function Top() {
    return (
        <header className="top-container">
            <NavLink to="/" className="symbol">AMORRAY BLOG</NavLink>
            <Nav />
        </header>
    );
}