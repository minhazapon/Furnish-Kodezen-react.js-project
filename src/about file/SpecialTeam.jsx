
import s1 from '../pic file/st1.jpg'
import s2 from '../pic file/st2.jpg'
import s3 from '../pic file/st3.jpg'
import s4 from '../pic file/st4.jpg'


const SpecialTeam = () => {


    return (
        <div className=" SpecialTeam ">


            <div>

            <div>
                <p className=" team-text ">Special Team</p>
            </div>

            <div className=" all-special-team-card ">
            <div>
            <img className="hv1" height="250px" width="275px" src={s1} alt="" />
            <p className=" olivia-name ">Olivia Rhye</p>
            <p className=" olivia-name1 FC-color ">Founder & CEO</p>
            </div>
            <div>
            <img className="hv1" height="250px" width="275px" src={s2} alt="" />
            <p className=" olivia-name ">Phoenix Baker</p>
            <p className=" olivia-name1 FC-color ">Product Designer</p>
            </div>
            <div>
            <img className="hv1" height="250px" width="275px" src={s3} alt="" />
            <p className=" olivia-name ">Demi Wilkinson</p>
            <p className=" olivia-name1 FC-color ">Managing Director</p>
            </div>
            <div>
            <img className="hv1" height="250px" width="275px" src={s4} alt="" />
            <p className=" olivia-name ">Demi Wilkinson</p>
            <p className=" olivia-name1 FC-color ">VP Sales</p>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default SpecialTeam;