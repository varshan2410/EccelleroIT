import './Home.css'
import './Branches.css'
import logo from '../../assets/Logo.png';
import user from '../../assets/user.png';
import {useState} from 'react';


const Branches = () => {
    const [active, setActive] = useState('branches');
    const [view, setView] = useState('list'); // 'list' | 'grid'
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div>
        {sidebarOpen && <div id="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
        <aside id="sidebar" className={sidebarOpen ? 'open' : ''}>
            <button id="sidebar-close" onClick={() => setSidebarOpen(false)}>
                <i className="fa-solid fa-times"></i>
            </button>
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
                        <button id="mobile-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <h1>Organization - Branches</h1>
                        <div id="nav-bar-buttons">
                            <button id="del-button">Delete Branch</button>
                            <button id="add-button">+ Add Branch</button>
                        </div>
                    </nav>

                    <section id="branch-toolbar">
                        <div id="branch-toolbar-left">
                            <h2>Branches</h2>
                            <span id="entries-count">12,785 Entries</span>
                            <div id="branch-search">
                                <input placeholder="Search for branches" />
                            </div>
                        </div>
                        <div id="branch-toolbar-right">
                            <div id="view-toggle">
                                <button className={view === 'list' ? 'active' : ''} aria-label="List view" onClick={() => setView('list')}>
                                    <i className="fa-solid fa-list"></i>
                                </button>
                                <button className={view === 'grid' ? 'active' : ''} aria-label="Grid view" onClick={() => setView('grid')}>
                                    <i className="fa-solid fa-border-all"></i>
                                </button>
                            </div>
                        </div>
                    </section>

                    {view === 'list' && (
                        <div className="branch-table">
                            <div className="branch-table-head">
                                <div className="col name">Name</div>
                                <div className="col employees">Employees</div>
                                <div className="col location">Location</div>
                                <div className="col more">More</div>
                            </div>
                            {[1,2,3].map((i) => (
                                <div key={i} className="branch-row">
                                    <div className="col name"><span className="checkbox" />Branch</div>
                                    <div className="col employees">1234</div>
                                    <div className="col location">Colombo</div>
                                    <div className="col more"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                                </div>
                            ))}
                        </div>
                    )}

                    {view === 'grid' && (
                        <div className="branch-grid">
                            {[1,2,3].map((i) => (
                                <div key={i} className="branch-card">
                                    <div className="card-top">
                                        <div className="left">
                                            <span className="checkbox" />
                                            <div className="title-block">
                                                <h4>Branch</h4>
                                                <span className="emp">1234</span>
                                            </div>
                                        </div>
                                        <button className="card-more" aria-label="More"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                    </div>
                                    <div className="card-footer">Colombo</div>
                                </div>
                            ))}
                        </div>
                    )}
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


