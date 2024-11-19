


const ContactForm = () => {


    return (
        <div className=" ContactFormMain ">

             

             <div>

               

               <div className=" form-flex">
               
                 <form>
                    
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
                 {/* <div className=" F-l ">
                   
                 <div className=" ">
                 <input className=" FN " type="text" placeholder="location" name="firstName" required  />
                 </div>
                 <div className=" button-flex  ">
                  <input className=" form-button " type="submit" value="Get started" />
                 </div>

                 </div> */}
                 


                </div>


                </form>
              
               </div>

























             </div>
           



           



           
            
        </div>
    );
};

export default ContactForm;



// <!-- HTML !-->
// <button class="button-2" role="button">Button 2</button>

// /* CSS */
// .button-2 {
  
// }