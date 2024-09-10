import Styles from "./ToggleText.module.css"


function ToggleText1() {
    return (
        <div>
             <div className={Styles.toggler_text} >
                    <h1>“We have a long history with this company and <br />
                    several major projects together. Their expertise<br />
                    consistently makes us look good.”<br />

                    </h1>
                    


                    <div className={Styles.name} >
                        <img src="./Fran Mayo.avif" alt="" />
                        <h4>Fran Mayo</h4>
                        <h4>Space Craft / Marketing Manager</h4>
                    </div>
                </div>
        </div>
    )
}

export default ToggleText1