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
        <div className={Styles.main} ref={main} >
            {/* <h1>vebfs </h1> */}
            <img src="./public/Sectionimg.avif" alt=""  />  
        </div>
    )
}

export default ImgSection
