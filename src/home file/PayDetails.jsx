import { Link } from "react-router-dom";


const PayDetails = () => {


    return (
        <div>

            <div className=" Pay-img ">
                <div>
                 <p className=" pay-text  ">We pay details in<br></br> 
                 every our work</p>
                 <p className=" lorem ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit et nisl<br></br> tristique nulla. Nisl, egestas molestie vestibulum lectus habitasse donec morbi.<br></br> At est parturient id eu ut. </p>
                 <div className=" CV ">
                 <button className=" CU-b buttonHover " >Contact Us</button>
                 <Link><p className=" VP">View Projects</p></Link>
                 </div>
                </div>
            </div>
            
        </div>
    );
};

export default PayDetails;