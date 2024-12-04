import Swal from "sweetalert2";

import f1 from '../pic file/mac1.jpg'


const ContactForm = () => {


  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Get Started!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      event.target.reset();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      setResult(data.message);
    }
    };


    return (

        <div className=" ContactFormMain ">
        <div className=" contact-flex ">
        <div className=" form-flex form-border ">
        <form onSubmit={onSubmit} >
        <div className="   ">
        <p className=" let-text ">Let’s level up your brand,<br></br> together</p>
        <p className=" email-title ">You can reach us anytime via <span className=" Hi-color ">hi@furnish.com</span></p>
        <div className=" F-l ">
        <div>
        <p className=" form-label ">First name</p>
        <input className=" FN " type="text" placeholder="First name" name="firstName" required  />
        </div>
        <div>
        <p className="  form-label ">Last name</p>
        <input className=" FN " type="text" placeholder="Last name" name="LastName" required />
        </div>
        </div>
        <div>
        <p className="  form-label  ">Email</p>
        <input className="form-email"  type="email" name="email" placeholder="Email" id="" required />
        </div>
        <div>
        <p className="  form-label ">Phone number</p>
        <input className="form-email" type="number" name="number" placeholder="+8801950374409" id="" />
        </div>
        <div>
        <p className="  form-label ">Message</p>
        <textarea className="form-message" name="textarea" placeholder="Leave us a message..." id=""></textarea>
        </div>
        <div className="">
        <input className=" form-button form-button-hover " type="submit" value="Get started" />
        </div>
        </div>
        </form>
        </div>
        <div className=" res-m ">
        <img className="  form-photo  " height="882px" width="550px" src={f1} alt="" />
        </div>
        </div>
        </div>



    );
};

export default ContactForm;


