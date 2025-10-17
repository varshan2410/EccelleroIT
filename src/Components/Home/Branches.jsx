import './Home.css'
import './Branches.css'
import logo from '../../assets/Logo.png';
import user from '../../assets/user.png';
import { useState } from 'react';


const Branches = () => {
    const [active, setActive] = useState('branches');
    return (
        <div>
        <aside id="sidebar">
            <img id="logo" src={logo} alt="Eccellero logo" />
            <div id="nav-buttons">
                 <button className={active === 'dashboard' ? 'active' : ''} onClick={() => setActive('dashboard')}>
                     <i className="fa-solid fa-house"></i>
                     <h3>Dashboard</h3>
                 </button>
                 <button className={active === 'branches' ? 'active' : ''} onClick={() => setActive('branches')}>
                     <i className="fa-regular fa-star"></i>
                     <h3>Branches</h3>
                 </button>
                 <button className={active === 'departments' ? 'active' : ''} onClick={() => setActive('departments')}>
                     <i className="fa-regular fa-star"></i>
                     <h3>Departments</h3>
                 </button>
            </div>
            
            <div id="profile-home">
                <div id="user-profile-home">
                    <img src={user} alt="user"></img>
                    <div id="username-home">
                        <h4>John Doe</h4>
                        <p>@eccellero</p>
                    </div>
                    <button id="profile-toggle" aria-label="Toggle profile"><i className="fa-solid fa-angle-up"></i></button>
                </div>
                <div id="signout-div-home">
                    <button id="signout-home">Sign out</button>
                    <i className="fa-solid fa-gear"></i>
                </div>
            </div>
        </aside>

        <main id="content-area">
            {active === 'branches' && (
                <div>
                    <nav id='nav-bar-branch'>
                        <h1>Organization - Branches</h1>
                        <div id="nav-bar-buttons">
                            <button id="del-button">Delete Branch</button>
                            <button id="add-button">+ Add Branch</button>
                        </div>
                    </nav>
                    <h2>Branches</h2>
                    <p>Branches content.</p>
                </div>
            )}
            {active === 'dashboard' && (
                <div>
                    <h2>Dashboard</h2>
                    <p>Dashboard content.</p>
                </div>
            )}
            {active === 'departments' && (
                <div>
                    <h2>Departments</h2>
                    <p>Departments content.</p>
                </div>
            )}
        </main>
        </div>
    );
};

export default Branches;


