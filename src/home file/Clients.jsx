

import r1 from '../pic file/r1.jpg'
import r2 from '../pic file/r2.avif'

const Clients = () => {


    return (
        <div className=" Clients  ">

            <div>
            <div>
            <p className=" BestText2 ">What our clients say</p>               
            </div>

            <div className=" all-client-card">

            <div className=" Client-cardOne ">
            <img className=" img-border " height="270px" width="220px" src={r1}
            alt="" />
            <div className=" C-R ">
            <img height="30px" src="https://cdn-icons-png.flaticon.com/128/17399/17399932.png" alt="" /> 
            <p className=" CT-1 ">As expected, 10 years experience on <br></br> furniture business will not<br></br> disappointing at all</p>
            <p className=" CT-2 ">As they said, their 10 years of experience in<br></br>furniture and interior business is real. They<br></br> work it professionally and friendly at the same<br></br> time and of course the results is beyond my<br></br> expectations.</p>
            <p className=" CT-3 ">Roy Rakabuming</p>
            </div>
            </div>

            <div className=" Client-cardOne ">
            <img className=" img-border " height="270px" width="220px" src={r2}
            alt="" />
            <div className=" C-R ">
            <img height="30px" src="https://cdn-icons-png.flaticon.com/128/17399/17399932.png" alt="" /> 
            <p className=" CT-1 ">As expected, 10 years experience on <br></br> furniture business will not<br></br> disappointing at all</p>
            <p className=" CT-2 ">As they said, their 10 years of experience in<br></br>furniture and interior business is real. They<br></br> work it professionally and friendly at the same<br></br> time and of course the results is beyond my<br></br> expectations.</p>
            <p className=" CT-3 ">Dafit Bekam</p>
            </div>

            </div>

            </div>
            </div>


        </div>
    );
};

export default Clients;