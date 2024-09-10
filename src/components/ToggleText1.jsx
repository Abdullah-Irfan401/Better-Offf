import Styles from "./ToggleText.module.css"


function ToggleText1() {
    return (
        <div>
             <div className={Styles.toggler_text} >
                    <h1>“We involve this team in every new product. <br />
                        They excel at their work and care about <br />
                        every detail, making each project special <br />
                        and unique.”
                    </h1>
                    <div className={Styles.name} >
                        <img src="./Jesse Orrico.avif" alt="" />
                        <h4>Jesse Orrico</h4>
                        <h4>Relevant Compliance / Product Owner</h4>
                    </div>
                </div>
        </div>
    )
}

export default ToggleText1
