import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import Styles from "./ThirdSection.module.css"
import { useRef } from "react";


function ThirdSection() {

    const work = useRef()
    const premium = useRef()
    const video = useRef()



    useGSAP(() => {
        gsap.to( work.current, {
            gap: 0,
            scrollTrigger:{
                trigger: work.current,
                scrub: 1,
                // markers: true,   
                start: "top 200rem",
                end: "bottom 200rem"
            }
            
        });
    });

    useGSAP(() => {
        gsap.to( video.current, {
            scale: 2.6,
            y: "50rem",
            x: "-3rem",
            pin: true,
            // ease: "power3.inOut",
            scrollTrigger:{
                // markers: true,
                trigger: work.current,
                scrub: 1,
                // markers: true,   
                start: "topm 200rem",
                // pin: true
            }
            
        });
    });

    return (
        <div className={Styles.main}  >
            <div className={Styles.bo_02} >
                <h4>● PROJECTS</h4>
                <h4>(BO® — 02)</h4>
                <h5>See all of our work</h5>
            </div>
            <div className={Styles.text} ref={premium} >
                <h1>PREMIUM</h1>
            </div>
            <div  className={Styles.work} ref={work} >
                <h1>WO</h1>  <h1>RK</h1>
                
            </div>
            <div className={Styles.video}  >
                <video src="/video.mp4" autoPlay loop muted ref={video} ></video>
            
            </div>

            {/* <h1 className={Styles.csdsvd}> dskhjl</h1> */}
        </div>
    )
}

export default ThirdSection
