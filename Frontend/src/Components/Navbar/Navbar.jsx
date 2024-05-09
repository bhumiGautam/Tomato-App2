// // import React, { useContext, useState } from 'react'
// // import './Navbar.css'
// // import {assets} from '../../assets/assets'
// // import { Link, useNavigate } from 'react-router-dom';
// // import { StoreContext } from '../../Context/StoreContext';

// // const Navbar = ({setShowLogin}) => {

// //     const [menu,setMenu]=useState("home");

// //     const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
// //     const navigate=useNavigate();

// //     const logout=()=>{
// //       localStorage.removeItem("token");
// //       setToken("");
// //       navigate("/");
// //     }

// //   return (
// //     <div className='navbar'>
// //       <Link to='/'>  <img src={assets.logo} alt="" /> </Link>
// //         <ul className='navbar-menu'>
// //             <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
// //             <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
// //             <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
// //             <a  href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</a>
// //         </ul>
// //         <div className="navbar-right">
// //             <img src={assets.search_icon} alt="" />
// //             <div className="navbar-search-icon">
// //               <Link to='/cart' > <img src={assets.basket_icon} alt="" /> </Link>
// //                 <div className={getTotalCartAmount()===0?"":"dot"}></div>
// //             </div>
// //             {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
// //             :<div>
// //               <img src={assets.profile_icon} alt="" className='nav-profile-icon' />
// //               <ul className="nav-profile-dropdown">
// //                 <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
// //                 <hr />
// //                 <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
// //               </ul>
// //               </div>}
            
// //         </div>
      
// //     </div>
// //   )
// // }

// // export default Navbar






















// // Navbar.jsx

// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../Context/StoreContext';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("home");
//     const [showProfileDropdown, setShowProfileDropdown] = useState(false); // State to manage visibility of profile dropdown

//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     }

//     const toggleProfileDropdown = () => {
//         setShowProfileDropdown(prevState => !prevState); // Toggle profile dropdown visibility
//     }

//     return (
//         <div className='navbar'>
//             <Link to='/'> <img src={assets.logo} alt="" /> </Link>
//             <ul className='navbar-menu'>
//                 <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
//                 <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//                 <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
//                 <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart' > <img src={assets.basket_icon} alt="" /> </Link>
//                     <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//                 </div>
//                 {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button>
//                     : <div className="navbar-profile">
//                         <img src={assets.profile_icon} alt="" className='nav-profile-icon' onClick={toggleProfileDropdown} />
//                         {showProfileDropdown && // Render dropdown if showProfileDropdown is true
//                             <ul className="nav-profile-dropdown">
//                                 <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                                 <hr />
//                                 <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
//                             </ul>}
//                     </div>}
//             </div>
//         </div>
//     )
// }

// export default Navbar;













// import React, { useContext, useState, useRef, useEffect } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../Context/StoreContext';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("home");
//     const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//     const profileRef = useRef(null); // Ref for the profile icon

//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Function to handle click outside of profile dropdown
//         const handleClickOutside = (event) => {
//             if (profileRef.current && !profileRef.current.contains(event.target)) {
//                 setShowProfileDropdown(false);
//             }
//         };

//         // Add event listener to handle click outside
//         document.addEventListener('mousedown', handleClickOutside);

//         // Cleanup function to remove event listener
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     }

//     const toggleProfileDropdown = () => {
//         setShowProfileDropdown(prevState => !prevState);
//     }

//     return (
//         <div className='navbar'>
//             <Link to='/'> <img src={assets.logo} alt="" /> </Link>
//             <ul className='navbar-menu'>
//                 <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
//                 <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//                 <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
//                 <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart' > <img src={assets.basket_icon} alt="" /> </Link>
//                     <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//                 </div>
//                 {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button>
//                     : <div className="navbar-profile" ref={profileRef}>
//                         <img src={assets.profile_icon} alt="" className='nav-profile-icon' onClick={toggleProfileDropdown} />
//                         {showProfileDropdown &&
//                             <ul className="nav-profile-dropdown">
//                                 <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                                 <hr />
//                                 <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
//                             </ul>}
//                     </div>}
//             </div>
//         </div>
//     )
// }

// export default Navbar;













import React, { useContext, useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const profileRef = useRef(null);

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(prevState => !prevState);
    }

    return (
        <div className='navbar'>
            <Link to='/'> <img src={assets.logo} alt="" /> </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart' > <img src={assets.basket_icon} alt="" /> </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button>
                    : <div className="navbar-profile" ref={profileRef}>
                        <img src={assets.profile_icon} alt="" className='nav-profile-icon' onClick={toggleProfileDropdown} />
                        {showProfileDropdown && 
                            <ul className="nav-profile-dropdown">
                                <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                <hr />
                                <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
                            </ul>}
                    </div>}
            </div>
        </div>
    )
}

export default Navbar;



