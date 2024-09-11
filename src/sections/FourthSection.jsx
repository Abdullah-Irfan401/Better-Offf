import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import { useRef } from "react";

import Styles from "./FourthSection.module.css"
import ExpandableSection from "../components/ExpandableSection"
import Toggler from "../components/Toggler";

function FourthSection() {

    const main = useRef()

    useGSAP(() => {
        gsap.to( main.current, {
            y :-300,
            pin: true,
            scrollTrigger:{
                // markers: true,
                trigger: main.current,
                scrub: 1,  
                start: "top 650rem",
                end: "top 1rem",
            }
            
        });
    });

    return (
        <div className={Styles.main} ref={main} >
            <div className={Styles.text} >
                <div className={Styles.bo_03} >
                    <h4>● CONCIERGE CREATIVE</h4>
                    <h4>(BO® — 03)</h4>
                </div>

                <div className={Styles.heading} >
                    <h1><span> Superior brands require sophisticated</span> <br />
                    <span> capabilities that many businesses could not</span> <br />
                        <span>access until now.</span> <br />
                    </h1>
                </div>
            </div>

            <div className={Styles.services} >
                <h1>Services</h1>
            </div>
            <div className={Styles.parent_container}>
                <div className={Styles.accordian}>
                    <h4>Our process and capabilities include:</h4>
                    <ExpandableSection
                        number="1"
                        title="Strategy"
                        content="Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements."
                        tags={[
                        'Brand Architecture & Roadmaps',
                        'Brand Strategy',
                        'Digital Strategy',
                        'Product Launch Strategy',
                        'SEO & Content Strategy',
                        'Information Architecture (IA)', 
                        'Design Systems',
                        'Brand Messaging',
                        'User Research & Testing',
                        'New Revenue Streams'   
                        ]}
                    />
                    <ExpandableSection
                        number="2"
                        title="Design"
                        content="Our design services focus on pitch-perfect brand identities, flawless UX and UI design, and unforgettable product builds that ensure your vision is brought to life with intention and precision. Our rapid prototyping and ironclad design systems streamline the development process, while our expertise in information architecture and motion design enhances usability and engagement. We create intuitive product interfaces and captivating social media designs that pop off the screen and elicit action."
                        tags={[
                        'Brand Identity',
                        'Brand Guidelines',
                        'UX and UI Design',
                        'Website & App Design',
                        'Art Direction',
                        'Product Concepting', 
                        'Rapid Prototyping',
                        'Content Design',
                        'Motion Design',
                        'Product Interfaces',
                        'Social Media Design'   
                        ]}
                    />
                    <ExpandableSection
                        number="3"
                        title="Technology"
                        content="We build full-stack digital brand extensions that serve as the online anchors of our clients’ multichannel narratives. Our no-code Framer and Webflow solutions enable rapid and efficient development timelines for both sites and products. As Shopify Plus e-commerce partners and WordPress master developers, we offer the most advanced functionality options paired with the simplest and most robust content management systems. When it comes to development, our velocity and versatility is unrivaled. "
                        tags={[
                        'No-code Framer Solutions',
                        'Webflow Solutions',
                        'Shopify Plus (Partners)',
                        'Advanced E-commerce',
                        'WordPress',
                        'Full Stack Development', 
                        'Journey Mapping & Testing',
                        'Accessibility (WCAG) 2.1',   
                        ]}
                    />
                    <ExpandableSection
                        number="4"
                        title="content"
                        content="We craft content designed to cancel noise, cut through clutter, and connect with your customers on an emotional level. We view content as branded behavior that must reflect the position and principles of the company, and serve as an authentic extension of its story. Every content launch includes a strategy that aligns with your business objectives and a deployment plan that ensures the project comes in on-deadline and on-budget.   "
                        tags={[
                        'Brand Asset Development',
                        'Brand Asset Development',
                        'Social Content Development',
                        'Email Campaign Development',
                        'Generative AI Image Creation',
                        'Copywriting', 
                        'Brand Naming',
                        'Project Management',   
                        ]}
                    />
                </div>
            </div>
            {/* <div className={Styles.accordian} >
                <h4>Our process and capabilites include:</h4>
                <ExpandableSection />
            </div> */}


                <hr />

                <div className={Styles.bo_04} >
                    <h4>● CLIENT APPROVAL</h4>
                    <h4>CREATIVE AS BUNDLED PROJECTS</h4>
                    <h5>(BO® — 04)</h5>
                </div>

                <div className={Styles.toggler} >
                    <Toggler/> 
                </div>


                        </div>
    )
}

export default FourthSection
