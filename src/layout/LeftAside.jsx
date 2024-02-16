import { NavLink } from 'react-router-dom';

export { LeftAside };

function LeftAside() {
    return (
        <aside className="navigation-container">
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
        </aside>
    )
}