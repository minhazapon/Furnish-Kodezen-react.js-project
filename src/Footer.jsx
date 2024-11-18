import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {

    
    return (
        <div className=" FooterMain ">

            <div className=" Footer-details ">
            <div>
            <div className=" footer-L-N ">
            <img height="60px" width="60px" src="https://cdn-icons-png.flaticon.com/128/5234/5234853.png" alt="" />
            <p className=" footer-name ">FURNISH</p>
            </div>
            <div>
            <p className=" footer-para ">Discover Your<br></br>
            Dream Furniture</p>
            </div>
            <div className=" Address ">
            <div className=" Footer-location ">
            <p><CiLocationOn className=" location-icon "></CiLocationOn></p>
            <p className="">Address</p>
            </div>
            <div>
            <p className=" footer-Address ">7319 Wagon Lane
            Bradenton, FL 34203</p>
            </div>
            </div>
            <div className=" Address contact ">
            <div className=" Footer-location ">
            <p><MdOutlineMailOutline className=" location-icon "></MdOutlineMailOutline></p>
            <p className="">Contact</p>
            </div>
            <div>
            <p className=" footer-Address ">hellosansbrothers@gmail.com</p>
            </div>
            </div>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className=" all-footer-details">
            <div>
            <p className=" footer-Details-text ">Website</p>
            <p className=" footer-Details-text-2  ">Home</p>
            <p className=" footer-Details-text-2  ">About us</p>
            <p className=" footer-Details-text-2  ">Services</p>
            <p className=" footer-Details-text-2  ">Contact Us</p>
            </div>
            <div>
            <p className=" footer-Details-text ">Company</p>
            <p className=" footer-Details-text-2  ">Privacy Policy</p>
            <p className=" footer-Details-text-2  ">Terms & Condition</p>
            <p className=" footer-Details-text-2  ">Refund Policy</p>
            </div>
            <div>
            <p className=" footer-Details-text ">Products</p>
            <p className=" footer-Details-text-2  ">Tables</p>
            <p className=" footer-Details-text-2  ">Chairs</p>
            <p className=" footer-Details-text-2  ">Storages</p>
            <p className=" footer-Details-text-2  ">Decorations</p>
            </div>
            </div>
            </div>

            <div className="footer-line">
              <hr></hr>
            </div>


            <div className=" footer-last ">
            <div>
            <p>Copyright © Furnishhome. All Rights Reserved.</p>
            </div>
            <div className=" all-icon ">
            <p><FaFacebook className=" social-icon "></FaFacebook></p>
            <p><FaSquareInstagram className=" social-icon "></FaSquareInstagram></p>
            <p><FaLinkedin className=" social-icon "></FaLinkedin></p>
            <p><FaTwitter className=" social-icon "></FaTwitter></p>
            </div>
            </div>

            
        </div>
    );
};

export default Footer;