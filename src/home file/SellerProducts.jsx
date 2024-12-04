

import bs1 from '../pic file/bestseller1.png'
import bs2 from '../pic file/bs2.png'
import bs3 from '../pic file/bs3.png'
import bs4 from '../pic file/bs4.png'
import bs5 from '../pic file/bs5.png'

const SellerProducts = () => {


    return (

        <div className=" SellerProducts ">
        <div>
        <div className=" margin" >
        <div>
        <p className="SP-title ">Best Seller Products</p>  
        </div>
        {/* ----------------------------------------------- */}
        <div>
        <div className=" cardContainerZ ">  
        <div className=" cardOne ">
        <img className=" chair-bg hv1 " src={bs1} 
        alt="" height="220px" />
        <p className=" Office-Chair ">Office Chair</p>
        <p className=" Cream-Office-Chair ">Cream Office Chair</p>
        <div className=" Price ">
        <div className=" AllNumber ">
        <p className=" numberText ">$50,00</p>
        <p className=" numberText2 ">$56,00</p>
        </div>
        <div className=" allZColorZ ">
        <p className=" color1 "></p>
        <p className=" color2 "></p>
        <p className=" color3 "></p>
        <p className=" color4 "></p>
        </div>
        </div>
        </div>


        <div className=" cardOne ">
        <img className=" storage-bg hv1 " src={bs2}
        alt="" height="220px" />
        <p className=" Office-Chair ">Storage</p>
        <p className=" Cream-Office-Chair ">Celestra Grey Cabinet</p>
        <div className=" Price ">
        <div className=" AllNumber ">
        <p className=" numberText ">$35,00</p>
        <p className=" numberText2 ">$39,00</p>
        </div>
        <div className=" allZColorZ ">
        <p className=" color1 "></p>
        <p className=" color2 "></p>
        <p className=" color3 "></p>
        <p className=" color4 "></p>
        </div>
        </div>
        </div>


        <div className=" cardOne ">
        <img className=" Decoration-bg hv1 " src={bs3}
        alt="" height="220px" />
        <p className=" Office-Chair ">Decoration</p>
        <p className=" Cream-Office-Chair ">Fejka Artificial Plant</p>
        <div className=" Price ">
        <div className=" AllNumber ">
        <p className=" numberText ">$50,00</p>
        <p className=" numberText2 ">$70,00</p>
        </div>
        <div className=" allZColorZ ">
        <p className=" color1 "></p>
        <p className=" color2 "></p>
        <p className=" color3 "></p>
        <p className=" color4 "></p>
        </div>
        </div>
        </div>


        <div className=" cardOne ">
        <img className=" Lightings-bg hv1 " src={bs4}
        alt="" height="220px" />  
        <p className=" Office-Chair ">Lightings</p>
        <p className=" Cream-Office-Chair ">White Standing Lamp</p>
        <div className=" Price ">
        <div className=" AllNumber ">
        <p className=" numberText ">$28,00</p>
        <p className=" numberText2 ">$30,00</p>
        </div>
        <div className=" allZColorZ ">
        <p className=" color1 "></p>
        <p className=" color2 "></p>
        <p className=" color3 "></p>
        <p className=" color4 "></p>
        </div>
        </div>
        </div>


        <div className=" cardOne ">
        <img className=" table-bg hv1 " src={bs5}
        alt="" height="220px" />
        <p className=" Office-Chair ">table</p>
        <p className=" Cream-Office-Chair ">Brown Wood Table</p>
        <div className=" Price ">
        <div className=" AllNumber ">
        <p className=" numberText ">$25,00</p>
        <p className=" numberText2 ">$30,00</p>
        </div>
        <div className=" allZColorZ ">
        <p className=" color1 "></p>
        <p className=" color2 "></p>
        <p className=" color3 "></p>
        <p className=" color4 "></p>
        </div>
        </div>
        </div>


        </div>
        </div>
        </div>
        </div>
        </div>
        
    );
};

export default SellerProducts;