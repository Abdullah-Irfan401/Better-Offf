import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import Styles from "./SecondSection.module.css"
import { useRef } from "react";


function SecondSection() {

    const line1 = useRef()
    const line2 = useRef()
    const line3 = useRef()
    const line4 = useRef()
    const text = useRef()


    // useGSAP(() => {
    //     gsap.to(main.current, {
            
            
    //         scrollTrigger: {
    //             trigger: main.current,
    //             scroller: "body",
    //             start: "top 450rem",
    //             end: "450rem",
    //             scrub: true,
    //             markers: true,
    //             pin:true
    //           }
          
    //     });
    //   });

    useGSAP(() => {
        gsap.to(line1.current ,{
            y: -15,
            ease: "power4.out",
            delay: .2,
            scrollTrigger: {
                trigger:text.current,
                // markers: true,
            }
            
        })
    })

    useGSAP(() => {
        gsap.to(line2.current ,{
            y: -15,
            ease: "power4.out",
            delay: .4,
            scrollTrigger: {
                trigger:text.current,
                // markers: true,
            }
            
        })
    })

    useGSAP(() => {
        gsap.to(line3.current ,{
            y: -15,
            ease: "power4.out",
            delay: .6,
            scrollTrigger: {
                trigger:text.current,
                // markers: true,
            }
            
        })
    })

    useGSAP(() => {
        gsap.to(line4.current ,{
            y: -15,
            ease: "power4.out",
            delay: .8,
            scrollTrigger: {
                trigger:text.current,
                // markers: true,
            }
            
        })
    })

    return (
        <div   >
            <div className={Styles.heading}>    
                <div className={Styles.text} ref={text} >

                {/* <div className={Styles.line} ref={line1} ><span>No more inflated agency fees. No more flaky </span> <br /></div>
                    <div className={Styles.line} ref={line2} ><span> freelancers. No more salaried employees to</span> <br /></div>
                    <div className={Styles.line} ref={line3} > <span>manage. Just top-tier creative that’s easy, </span> <br /></div>
                    <div className={Styles.line} ref={line4} ><span>  high velocity, and sensibly priced.</span></div> */}

                    <h1 ><span  >No more inflated agency fees. No more flaky </span> <br />
                        <span> freelancers. No more salaried employees to</span> <br />
                        <span>manage. Just top-tier creative that’s easy, </span> <br />
                        <span>  high velocity, and sensibly priced.</span>
                    </h1>

                        <br />
                        <br />
                        
                        

                    <h1 className={Styles.hh} >Get transformational talent and capabilities <br />
                        in a turnkey platform that promises your <br />
                        brand will be Better Off®.
                    </h1>
                </div>
                

                <hr />

                <div className={Styles.bo_01} >
                    <h5>● Creative as it should be</h5>
                    <h5>(BO® — 01)</h5>
                </div>
                <div className={Styles.wrapper} >
                    <div>
                        <h4>Fully Loaded</h4>
                        <br />
                        <h5>From complex strategies to intricate identities <br />
                            to bleeding-edge digital development, every <br />
                            project is now possible with a click.
                        </h5>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h4>Flat Fee Flex </h4>
                        <br />
                        <h5>We do not haggle over hours. Our plans are <br />
                            nimble and allow plenty of wiggle room to <br />
                            account for shifting priorities and rethinking. <br />    
                        </h5>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h4>Creative Control </h4>
                        <br />
                        <h5>We do not want our clients to ever feel trapped <br /> 
                            or locked into anything. If you want to pump <br /> 
                            the brakes or step on the gas, feel free to <br /> 
                            pause, cancel, or upgrade anytime. <br /> 
                        </h5>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default SecondSection
