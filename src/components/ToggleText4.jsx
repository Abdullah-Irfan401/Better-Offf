/* eslint-disable react/no-unescaped-entities */
import Styles from "./ToggleText.module.css"


function ToggleText1() {
    return (
        <div>
             <div className={Styles.toggler_text} >
                    <h1> “We've partnered with Better Off for years, and are <br />
                    always impressed by their innovative brand <br />
                    development and precise execution. Their work <br />
                    during our recent rebrand matched our vision <br />
                    perfectly.”
                    </h1>
                   




                    <div className={Styles.name} >
                        <img src="./Andrew Watson.avif" alt="" />
                        <h4>Andrew Watson</h4>
                        <h4>Built Things / Owner</h4>
                    </div>
                </div>
        </div>
    )
}

export default ToggleText1