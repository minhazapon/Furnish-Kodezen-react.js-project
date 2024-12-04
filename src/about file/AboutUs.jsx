
import a1 from '../pic file/about1.png'

const AboutUs = () => {


    return (
        <div className=" AboutMain ">

        <div>
        <div className=" a-pic-text ">
        <div className=" about-header-text ">
        <p className=" aboutText  C1 ">About Us</p>
        <p className=" aboutText  C2  ">About Furnish</p>
        <p className=" aboutText  C3  ">Furnish was established in 1990, consectetur eleifend commodo at, consectetur<br></br> eu justo. Sed viverra consectetur risus nec ultricies.</p>
        </div>
        <div className=" about-pic ">
        <img className=" pic-border  " width="100%" height="600px" src={a1} alt="" />
        </div>  
        </div>   
        <div className=" NumberContainer ">
        <div>
        <p className=" numText ">10k+</p>
        <p className=" num2text ">Products Sold</p>
        </div>

        <div>
        <p className=" numText ">35+</p>
        <p className=" num2text ">Years Service</p>
        </div>

        <div>
        <p className=" numText ">90+</p>
        <p className=" num2text ">Outlets Worldwide</p>
        </div>

        <div>
        <p className=" numText ">1000+</p>
        <p className=" num2text ">Satisfied Customers</p>
        </div>


        </div>
        </div>

        </div>
    );
};

export default AboutUs;