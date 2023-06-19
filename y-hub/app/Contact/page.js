import EmbedMap from "../EmbedMap/page"
// import { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {

  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleSubmit=()=>{
      console.log("form submitted")
    }

    return (
      <main >
       <div className='Contact  d-inline-flex p-2'>
        <div>
          <div>Contact</div>
         <div className="mapAndAddress d-inline-flex p-2">
           <EmbedMap></EmbedMap>
         <div className="Address">
            <p>Y-HUB HQ</p>
            <p>634  Halvarson Estates Suite 039</p>
            <h5>7252075049</h5>
            <h5>yhub.skype</h5>
         </div>
         </div>
        </div>

       <div className="formDiv">
        <div>Subscribe With Us</div>
        <div className="Form">
             
     
      {/* {!isFormSubmitted ? ( */}
        <form action="https://formsubmit.co/singhdhamivishal@gmail.com" method="POST"className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" //value={username} 
           // onChange={handleChangeInput}
             />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email"// value={email} 
            //onChange={handleChangeInput} 
            />
          </div>
          <div className="app__flex">
            <input className="p-text" type="tel" placeholder="Your Contact No" name="tel"// value={email} 
            //onChange={handleChangeInput} 
            />
          </div>
      
          <button type="submit" className="p-text" //onClick={handleSubmit}
          >
            Subscribe
          </button>
        </form>
     {/*  ) : (
       //   <div>
      //     <h3 className="head-text">
      //       Thank  for Subscribing!
      //     </h3>
      //   </div>
      // )} */}

        </div>
      </div>
      
       </div>
       <div className="footer ">
      <h5>Y-HUB</h5> @2023 ALL RIGHTS RESERVED
       </div>
      </main>
    )
  }
  