import { useNavigate, useLocation } from 'react-router-dom';

import { history } from '_helpers';

import { Top } from 'layout';
import { LeftAside } from 'layout';
import { RightAside } from 'layout';
import { Main } from 'layout';
import { Footer } from 'layout';


export { App };


if(process.env.REACT_APP_API_URL === 'debug'){
    setDebugLevel(1)
}

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container">
            <Top />
            <LeftAside />
            <Main />
            <RightAside />
            <Footer />
        </div>
    );
}
