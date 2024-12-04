import { IoMdCheckmark } from "react-icons/io";
import w1 from '../pic file/w1.jpg'


const WorldClass = () => {


    return (
        <div className=" WorldClassMain ">
        <div className=" WC-flex ">
               
            <div className=" about-pic-world ">
            <img className="WC-pic hv1" height="480px" width="550px"  src={w1} 
            alt="" />
            </div>
            <div className=" WC-all-text ">
            <p className=" w1 ">We Design World Class<br></br> Furniture's</p>
            <p className=" w-text ">Aeneas vehicles do not belong to members of the arc. The whole protein and the price is<br></br> flattering. The class is suitable for the silent partners who turn to the shores through our<br></br> marriages, through the Hymenaean projects. </p>
            <p className=" w-text2 ">As eleifend mattis ligula, the door is loaded with urns at the borders. Aeneas<br></br> vehicles do not belong to members of the arc. The whole protein and the<br></br> price is M flattering. The class is suitable for the silent partners who turn <br></br>to the shores through our marriages, through the Hymenaean projects.</p>
            <div className=" design-lines  ">
            <p><IoMdCheckmark className=" icon-1 " ></IoMdCheckmark></p>
            <p className=" but-text ">But the eleifend mattis ligula, the door of the borders of the urn led at.</p>
            </div>
            <div className=" design-lines  ">
            <p><IoMdCheckmark className=" icon-1 " ></IoMdCheckmark></p>
            <p className=" but-text ">Aeneas vehicles do not belong to members of the arc.</p>
            </div>
            <div className=" design-lines  ">
            <p><IoMdCheckmark className=" icon-1 " ></IoMdCheckmark></p>
            <p className=" but-text ">Whole proteins and proteins are suitable for blanss.</p>
            </div>
            </div>

        </div>            
        </div>
    );
};

export default WorldClass;