import { NavLink } from 'react-router-dom';

export { RightAside };

function RightAside() {
    return (
        <aside className="aside-container">
            <nav className='right-nav-area'>
                <NavLink to="/">Home</NavLink>
            </nav>
        </aside>
    )
}