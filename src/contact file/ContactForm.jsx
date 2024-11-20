import Swal from "sweetalert2";



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


        <div className=" form-flex">
        <form onSubmit={onSubmit} >
        <div className=" form-border ">
        <p className=" let-text ">Let’s level up your brand,<br></br> together</p>
        <p className=" email-title ">You can reach us anytime via <span className=" Hi-color ">hi@furnish.com</span></p>
        <div className=" F-l ">
        <div>
        <p>First name</p>
        <input className=" FN " type="text" placeholder="First name" name="firstName" required  />
        </div>
        <div>
        <p>Last name</p>
        <input className=" FN " type="text" placeholder="Last name" name="LastName" required />
        </div>
        </div>
        <div>
        <p>Email</p>
        <input className="form-email"  type="email" name="email" placeholder="Email" id="" required />
        </div>
        <div>
        <p>Phone number</p>
        <input className="form-email" type="number" name="number" placeholder="+8801950374409" id="" />
        </div>
        <div>
        <p>Message</p>
        <textarea className="form-message" name="textarea" placeholder="Leave us a message..." id=""></textarea>
        </div>
        <div className="">
        <input className=" form-button form-button-hover " type="submit" value="Get started" />
        </div>
        </div>
        </form>
        </div>


        <div>
        <img className="  form-photo  " height="743px" width="500px" src="https://s3-alpha-sig.figma.com/img/dbd9/513a/967e27af0d44a8e92433b5c07da67061?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TXRVdFfSOWWYZN2XBb58UptsUN7hCbsOxsusrftc~CQMbzKkIPQfNmgDLlDhtWHkURMxQ79n~wNbxNZ3rT1OmN1xgrSox8FGfYcNV6jvtmkDEF5vE6ej-5HLT0-5G~wvvrVboKzPZand9yuuiDScqRYJ8NBWQmcjZmo6STrCMk-WgAGaFDMvl2eguJOKk6WLqTMXz3WmZZ~i4J3dAfaxOqJh-iK6TVC0bHpBO4CRnEW-ptz9TjeKHokSYcm5LQeSsoNrKQEWiFCwrLAGQg3b92BrDIPDGuQwyrnL9QSN7ZgOndZe9Ftka94iHhC-dY4wq6VmOQXESXB166WAZztXGg__" alt="" />
        </div>


        </div>


        </div>



    );
};

export default ContactForm;


