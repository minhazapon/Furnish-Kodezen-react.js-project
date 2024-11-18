import { NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <div>
            <div className=" navbar ">
                <div className=" navLogo  ">
                <NavLink to='/'>
                <img className=" " src="https://cdn-icons-png.flaticon.com/128/5234/5234853.png" alt="" height="50px" width="60px" /> 
                </NavLink>
                <p className="navName  ">FURNISH</p>
                </div>
                <div className=" navAllButton ">
                <NavLink><button className=" navAbout buttonHover   ">About us</button></NavLink>
                <NavLink><button className=" navAbout buttonHover">Contact us</button></NavLink>
                <button className=" navSign  buttonHover ">Sign In</button>
                </div> 
            </div>
        </div>
    );
};

export default Nav;