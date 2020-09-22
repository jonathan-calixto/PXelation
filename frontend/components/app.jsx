import React from 'react';
import {Link} from 'react-router-dom';
import LoginContainer from './session/login_container';


const App = () => (
    <div>
        <header>
            <header>
                <h1>PXelation</h1>
                <div>
                    <Link>Discover</Link>
                    <Link>Licensing</Link>
                    <Link>Memberships</Link>
                    <Link>Quests</Link>
                    <Link>Creator Stories</Link>
                    <Link>Blog</Link>
                </div>
                <div>
                    Search PXelation Box
                </div>
                <LoginContainer />
            </header>
        </header>
    </div>
);

export default App;