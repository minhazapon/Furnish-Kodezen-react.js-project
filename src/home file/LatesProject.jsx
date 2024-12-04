
import p1 from '../pic file/p1.png'
import p2 from '../pic file/p2.png'
import p3 from '../pic file/p3.png'
import p4 from '../pic file/p4.png'


const LatesProject = () => {

    return (

        <div className=" LatesProject" >
        <div className="">
        <div>
        <p className="  lp-title ">Our Lates Projects</p>
        </div>
        {/* ----------------------------------------------   */}
        <div className=" AllProjects ">
        <div>
        <img className=" hv1" src={p1}
        alt="" height="355px" width="255px" />
        <p className="KITCHENText">KITCHEN</p>
        <p className="AI-text ">Architech & Interior Design - 2023</p>
        </div>
        <div>
        <img className=" hv1" src={p2}
        alt="" height="355px" width="255px" />
        <p className="KITCHENText">LIVINGROOM</p>
        <p className="AI-text ">Architech & Interior Design - 2023</p>
        </div>
        <div>
        <img className=" hv1" src={p3}
        alt="" height="355px" width="255px" />
        <p className="KITCHENText">BEDROOM</p>
        <p className="AI-text ">Architech & Interior Design - 2023</p>
        </div>
        <div>
        <img className=" hv1"  src={p4} 
        alt="" height="355px" width="255px" />
        <p className="KITCHENText">BATHROOM</p>
        <p className="AI-text ">Architech & Interior Design - 2023</p>
        </div>
        </div>
        </div>
        </div>
        
    );
};

export default LatesProject;