import { Routes, Route, Navigate } from 'react-router-dom';

import { Alert, PrivateRoute } from 'components';
import { Home } from 'home';
import { AccountLayout } from 'account';
import { UsersLayout } from 'users';


export { Main };

function Main() {
    return (
        <main className="main-container">
            <section className="contents-container">
                <Alert />
                <div className="container pt-4 pb-4">
                    <Routes>
                        {/* private */}
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Home />} />
                            <Route path="users/*" element={<UsersLayout />} />
                        </Route>
                        {/* public */}
                        <Route path="account/*" element={<AccountLayout />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </section>
        </main>
    );
}