import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import user from '../../assets/user.png';
import setting from '../../assets/setting.png';
import home from '../../assets/home.png';
import './Home.css'

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div>
            <nav className={isMenuOpen ? 'open' : ''}>
                <img id="logo" src={logo} alt="Eccellero logo" />
                <button id="nav-toggle" aria-label="Toggle menu" onClick={() => setIsMenuOpen((p) => !p)}>
                    ☰
                </button>
                <div id="nav-right">
                    <div id="user-profile">
                        <img src={user} alt="user"></img>
                        <div id="username">
                            <h4>John Doe</h4>
                            <p>@eccellero</p>
                        </div>
                    </div>
                    <div id="signout-div">
                        <button id="signout">Sign out</button>
                        <img src={setting} alt="setting"></img>
                    </div>
                </div>
            </nav>

            <div className="container">
                <button className="card" onClick={() => navigate('/branches')}>
                    <img src={home} alt="home"></img>
                    <p>Organizations</p>
                </button>
                <button className="card">
                    <img src={home} alt="home" ></img>
                    <p>Human Resourses</p>
                </button>
                <button className="card">
                    <img src={home} alt="home"></img>
                    <p>Accounting</p>
                </button>
                <button className="card">
                    <img src={home} alt="home"></img>
                    <p>Inventory</p>
                </button>
                <button className="card">
                    <img src={home} alt="home"></img>
                    <p>Reports</p>
                </button>
                <button className="card">
                    <img src={home} alt="home"></img>
                    <p>Dashboard</p>
                </button>
                <button className="card">
                    <img src={home} alt="home"></img>
                    <p>Vehicles</p>
                </button>
            </div>


        </div>
    );
};

export default Home;