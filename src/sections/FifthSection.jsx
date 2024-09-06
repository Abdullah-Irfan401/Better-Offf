import Toggler from "../components/Toggler"
import Styles from "./FifthSection.module.css"


function FifthSection() {
    return (
        <div className={Styles.main} >
            <hr />

            <div className={Styles.bo_04} >
                <h4>● CLIENT APPROVAL</h4>
                <h4>CREATIVE AS BUNDLED PROJECTS</h4>
                <h5>(BO® — 04)</h5>
            </div>

            <div className={Styles.toggler} >
                <Toggler /> 
            </div>

            
            
        </div>
    )
}

export default FifthSection
