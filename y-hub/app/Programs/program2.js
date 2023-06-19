import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Program2() {
    return (
      <main className='program2'>
        <div className="thoughtAndPhoto  d-inline-flex p-2">
            <div className="Thought">
                <h3>
                    Beleive in yourself! Have Faith in your Abilities ! Without a humble but reasonable considence in your own powers
                </h3>
                <h6>Norman Vincent Peale</h6>
            </div>
            <div className="Photo">
                <Image src='/programGirl.png' alt="My Image" width={500} height={300}/>
            </div>
        </div>
        <div className="goals" >
            <div className="goal1and2 d-inline-flex p-2"  >
               <div className="goal1">
                  <div className="d-inline-flex"> <Image alt="01"></Image><h2>Awareness</h2></div>
                  <div>01</div>
                  <div> Parent and Teacher workshops,capacity development and pop-up workshops</div>
               </div>
               <div className="goal2"  >
                  <div className="d-inline-flex"> <Image alt="01"></Image><h2>Engagement</h2></div>
                  <div>02</div>
                  <div> Guest workshops,ecosystem meetups,summer camps and monthly challenges</div>
               </div>
            </div>
            <div className="goal3and4 d-inline-flex p-2">
               <div className="goal3">
                  <div className="d-inline-flex"> <Image alt="01"></Image><h2>Launch</h2></div>
                  <div>03</div>
                  <div> Shark Tank style pitching ,hackathons,protyping and specialized.</div>
               </div>
               <div className="goal4">
                  <div className="d-inline-flex"> <Image alt="01"></Image><h2>Advocacy</h2></div>
                  <div>04</div>
                  <div> Providing co-working space for students and conducting career fairs advocacy-Providing co-working space for students and conducting career fairs</div>
               </div>
            </div>
        </div>
        <div className="brands d-inline-flex p-2">
        <Image src='/Vectorbrand1.png' alt="My Image" width={135} height={41}/>
        <Image src='/Fossabrand3.png' alt="My Image" width={87} height={43}/>
        <Image src='/Vectorbrand2.png' alt="My Image" width={61} height={61}/>
        
        </div>
      </main>
    )
  }
  