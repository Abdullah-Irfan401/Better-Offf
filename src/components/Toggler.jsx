import { useState } from "react"
import Styles from "./Toggler.module.css"
import ToggleText1 from "./ToggleText1"
import ToggleText2 from "./ToggleText2"
import ToggleText3 from "./ToggleText3"
import ToggleText4 from "./ToggleText4"
import ToggleText5 from "./ToggleText5"


function Toggler() {

    const [isSelected , setIsSelected] = useState(0)

    const buttons = [
        { src: "./toggle1.avif", alt: "icon1" },
        { src: "./toggle2.avif", alt: "icon2" },
        { src: "./toggle3.avif", alt: "icon3" },
        { src: "./toggle4.avif", alt: "icon4" },
        { src: "./toggle5.avif", alt: "icon5" }
    ];

    const RenderToggleText = ({index}) =>{
         switch (index) {
            case 0: return <ToggleText1 />
                
                case 1: return <ToggleText2 />
            
                case 2: return <ToggleText3 />

                case 3: return <ToggleText4 />

                case 4: return <ToggleText5 />

         
            default:
                break;
         }
    }

    return (
        <div>
            <div className={Styles.toggler} >

                <div className={Styles.counter} >
                    <h4>1 — 5</h4>
                </div>

                <div className={Styles.toggler_text} >
                     {/* <ToggleText1 /> */}
                     <RenderToggleText index={isSelected} />
                     
                </div>

                <div className={Styles.boxContainer}>
                    {buttons.map((button, index) => (
                        <a href="#" key={index} className={isSelected === index ? Styles['selected-box'] : Styles.box} onClick={()=>setIsSelected(index)} >
                            <img src={button.src} alt={button.alt} />
                        </a>
            ))}
        </div>
                
  
            </div>
            
        </div>
    )
}

export default Toggler


                // <div className={Styles.boxContainer}>
                //     <a href="#" className={Styles.box}>
                //         <img src="./public/toggle1.avif" alt="icon1"/>
                //     </a>
                //     <a href="#" className={Styles.box}>
                //         <img src="./public/toggle2.avif" alt="icon2"/>
                //     </a>
                //     <a href="#" className={Styles.box}>
                //         <img src="./public/toggle3.avif" alt="icon3"/>
                //     </a>
                //     <a href="#" className={Styles.box}>
                //         <img src="./public/toggle4.avif" alt="icon4"/>
                //     </a>
                //     <a href="#" className={Styles.box}>
                //         <img src="./public/toggle5.avif" alt="icon5"/>
                //     </a>
                // </div>


