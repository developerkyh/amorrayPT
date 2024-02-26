import { NavLink } from 'react-router-dom';

export { LeftAside };

function LeftAside() {
    return (
        <aside className="navigation-container">
            <nav className='left-nav-area'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">공공데이터포털</NavLink>
            </nav>
        </aside>
    )
}