

import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome  } from  "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

const BestProducts = () => {


    return (
    <div className=" BPCONTAINER ">
        <div className=" b-p-margin ">
        <div>
        <p className=" BestText ">The Best Product<br></br> We Provide</p>
        </div>
        {/* --------------------------------------- */}
        <div>
        <div className=" ProductsCard products-res-card ">

        <div>
        {/* <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="" height="40px"  /> */}
        <p><FaHome  className=" P-icons "></FaHome ></p>
        <p className=" ProductText ">10 years of experience <br></br>
        in furniture business</p>
        <p className=" ProPara ">We’re already established since 2012, and in 10<br></br> years we have lots of positive reviews and <br></br>achievements</p>
        <div className=" Seetext   ">
        <p className="see buttonHover ">See more</p>
        <p><FaArrowRightLong className=" green-arrow "></FaArrowRightLong></p>

        </div>
        </div>


        <div>
        {/* <img src="https://cdn-icons-png.flaticon.com/128/657/657076.png" alt="" height="40px"  /> */}
        <p><MdPayment  className=" P-icons "></MdPayment ></p>
        <p className=" ProductText ">Afforable price with <br></br>
        world class quality</p>
        <p className=" ProPara ">Our craftsmen have lots of experience dealing<br></br> with crafting furnitures and some of them have<br></br> world class quality</p>
        <div className=" Seetext  ">
        <p className="see buttonHover ">See more</p>
        <p><FaArrowRightLong className=" green-arrow "></FaArrowRightLong></p>
        </div>
        </div>


        <div>
        {/* <img src="https://cdn-icons-png.flaticon.com/128/9513/9513802.png" alt="" height="40px"  /> */}
        <p><BiSolidLike  className=" P-icons "></BiSolidLike ></p>
        <p className=" ProductText ">Bring your ideas into <br></br>
        a living product</p>
        <p className=" ProPara ">Besides you can buy the existing product, you<br></br> can also consultate with us also to make your<br></br> dream furniture</p>
        <div className=" Seetext  ">
        <p className="see buttonHover ">See more</p>
        <p><FaArrowRightLong className=" green-arrow "></FaArrowRightLong></p>
        </div>
        </div>



        </div>
        </div>
        </div>
    </div>
    );
};

export default BestProducts;