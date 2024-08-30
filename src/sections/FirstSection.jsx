import ExploreButton from "../components/ExploreButton"
import Styles from "./FirstSection.module.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(useGSAP,ScrollTrigger);

function FirstSection() {

    const subscribe = useRef()


    useGSAP(() => {
        gsap.to(subscribe.current, {
            x: '-170%', 
            duration: 25, 
            repeat: -1,  
            ease: 'linear', 
      
          
        });
      });

    return (
        <>
            <div className={Styles.paragragh } >
                <p>Pick a plan, submit a job request,<br /> and your project will kickoff within <br /> 24 hours.</p>
                <br />
                <ExploreButton />
            </div>
            <div className={Styles.heading} >
                <h1>Premium quality creative at lean rates <br />
                    for growing businesses. Packaged as <br />
                    subscriptions or bundled projects.</h1>
            </div>
            <div className={Styles.subscribe} ref={subscribe} >
                <h1>SUBSCRIBESUBSCRIBESUBSCRIBESUBSCRIBESUBSCRIBE </h1>
                <img src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800" alt="" />
            </div>
        </>
    )
}

export default FirstSection
