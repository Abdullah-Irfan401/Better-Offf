import Styles from "./ToggleText.module.css"


function ToggleText1() {
    return (
        <div>
             <div className={Styles.toggler_text} >
                    <h1> This team excelled under pressure, delivering a <br />
                    standout UX/UI update to our booking section that<br />
                    redefined our collaboration and became a<br />
                    highlight for Royal Caribbean.”
                    </h1>
                   



                    <div className={Styles.name} >
                        <img src="./Tina Rossell.avif" alt="" />
                        <h4>Tina Rossell</h4>
                        <h4>Royal Carribbean / Commodity & Marketing Manager</h4>
                    </div>
                </div>
        </div>
    )
}

export default ToggleText1