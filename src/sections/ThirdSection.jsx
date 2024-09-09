import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import { useRef } from "react";
import Styles from "./ThirdSection.module.css"


function ThirdSection() {

    const work = useRef()
    const premium = useRef()
    const video = useRef()
    const main = useRef()



    useGSAP(() => {
        gsap.to( work.current, {
            gap: 0,
            scrollTrigger:{
                trigger: work.current,
                scrub: 1,
                // markers: true,   
                start: "top 450rem",
                end: "bottom 650rem"
            }
            
        });
    });
    
    useGSAP(() => {
        gsap.to( video.current, {
            // scale: 2.6,
            width:"95%",
            height: "80%",
            y: "35rem",
            x: "-3rem",
            pin: true,
            // ease: "power3.inOut",
            scrollTrigger:{
                trigger: work.current,
                scrub: 1,
                // markers: true,
                start: "top 450rem",
                end: "bottom 450rem"
                // pin: true
            }
            
        });
    });

    useGSAP(() => {
        gsap.to( main.current, {
            y :-1000,
            pin: true,
            
            scrollTrigger:{
                // markers: true,
                trigger: main.current,
                scrub: 1,  
                start: "top 650rem",
            }
            
        });
    });

    return (
        <div className={Styles.main} ref={main}  >
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
                <video src="/video.mp4"  ref={video} ></video>
            
            </div>

            {/* <h1 className={Styles.csdsvd}> dskhjl</h1> */}
        </div>
    )
}

export default ThirdSection
