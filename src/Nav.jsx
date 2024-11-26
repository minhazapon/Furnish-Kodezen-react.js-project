import { NavLink } from "react-router-dom";



const Nav = () => {


    return (
        <div className="  FixedNav ">

      

        <div className=" navbar   " >     
        <div className=" navLogo nav-margin-left ">
        <NavLink to='/'>
        <img className=" " src="https://cdn-icons-png.flaticon.com/128/5234/5234853.png" alt="" height="40px" width="50px" /> 
        </NavLink>
        <p className="navName   ">FURNISH</p>
        </div>
        <div className=" navAllButton nav-margin-right " >
        <NavLink to='/AboutMother'><button className=" navAbout font-dm-sans buttonHover">About Us</button></NavLink>
        <NavLink to='/contact' ><button className=" navAbout font-dm-sans buttonHover">Contact Us</button></NavLink>
        <div className=" text-sign ">
        <button className=" navSign dm-sans  buttonHover ">Sign In</button>
        </div>
        </div> 
        </div>

        </div>
    );
};

export default Nav;