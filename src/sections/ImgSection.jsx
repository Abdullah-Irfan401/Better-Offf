import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import { useRef } from "react";


import Styles from "./ImgSection.module.css"

function ImgSection() {

    const main = useRef()
    
    useGSAP(() => {
        gsap.to( main.current, {
            y : 150,
            // pin: true,
            scrollTrigger:{
                // markers: true,
                trigger: main.current,
                scrub: 1,  
                start: "top 350rem",
            }
            
        });
    });

    return (
        <div className={Styles.main} >
            {/* <h1>vebfs </h1> */}
            <img src="./public/Sectionimg.avif" alt=""   ref={main} />  
        </div>
    )
}

export default ImgSection
