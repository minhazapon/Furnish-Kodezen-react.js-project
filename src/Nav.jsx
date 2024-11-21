import { NavLink } from "react-router-dom";



const Nav = () => {


    return (
        <div className="  ">

      

        <div className=" navbar" >    
        <div className=" navLogo">
        <NavLink to='/'>
        <img className=" " src="https://cdn-icons-png.flaticon.com/128/5234/5234853.png" alt="" height="40px" width="50px" /> 
        </NavLink>
        <p className="navName   ">FURNISH</p>
        </div>
        <div className=" navAllButton " >
        <NavLink to='/AboutMother'><button className=" navAbout buttonHover">About</button></NavLink>
        <NavLink to='/contact' ><button className=" navAbout buttonHover">Contact</button></NavLink>
        <button className=" navSign  buttonHover ">Login</button>
        </div> 
        </div>

        </div>
    );
};

export default Nav;