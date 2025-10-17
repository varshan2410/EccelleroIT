 import './Home.css'
 import './Branches.css'
 import logo from '../../assets/Logo.png';
 import user from '../../assets/user.png';
 

const Branches = () => {
    return (
        <aside id="sidebar">
            <img id="logo" src={logo} alt="Eccellero logo" />
            <div id="nav-buttons">
                 <button>
                     <i className="fa-solid fa-house"></i>
                     <h3>Dashboard</h3>
                 </button>
                 <button>
                     <i className="fa-regular fa-star"></i>
                     <h3>Branches</h3>
                 </button>
                 <button>
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
                    <button id="profile-toggle" aria-label="Toggle profile"><i class="fa-solid fa-angle-up"></i></button>
                </div>
                <div id="signout-div-home">
                    <button id="signout-home">Sign out</button>
                    <i className="fa-solid fa-gear"></i>
                </div>
            </div>
        </aside>
    );
};

export default Branches;


