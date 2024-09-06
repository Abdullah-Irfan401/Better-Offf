import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import { useRef } from "react";


import Styles from "./SixthSection.module.css"


function SixthSection() {

    const main = useRef()
    
    useGSAP(() => {
        gsap.to( main.current, {
            y :-900,
            pin: true,
            scrollTrigger:{
                markers: true,
                trigger: main.current,
                scrub: 1,  
                start: "top 750rem",
            }
            
        });
    });

    return (
        <div className={Styles.main}  ref={main} >
            <div className={Styles.bo_02} >
                <h4>● FULL BENEFITS</h4>
                <h4>(BO® — 05)</h4>
                <h5>CREATIVE AS A SUBSCRIPTION</h5>
            </div>

            <div className={Styles.text} >
                <p className={Styles.creative}>CREATIVE</p>
                <p className={Styles.with}>WITH</p>
                <p className={Styles.no_fluff}>NO FLUFF</p>
            </div>
                <div className={Styles.parent_image} >
                    <div className={Styles.image} ><img src="./public/fluffimg.avif" alt="" /></div>
                </div>
                
        </div>
    )
}

export default SixthSection
{/* <div className={Styles.creative} ><h1>CREATIVE</h1></div>
<div className={Styles.with} ><h1>WITH</h1></div>
<div className={Styles.no_fluff} ><h1>NO FLUFF</h1></div>    */}