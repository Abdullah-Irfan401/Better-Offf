/* eslint-disable react/no-unescaped-entities */
import Styles from "./ToggleText.module.css"


function ToggleText1() {
    return (
        <div>
             <div className={Styles.toggler_text} >
                    <h1>“Referred by a friend, we appreciated this team's <br />
                    clear pricing and flexible staffing for our major site <br />
                    launches, including Shopify development. They're <br />
                    now our go-to team in a pinch.”
                    </h1>
                    



                    <div className={Styles.name} >
                        <img src="./Oleksandra Zubrytska.avif" alt="" />
                        <h4>Oleksandra Zubrytska</h4>
                        <h4>The Hollis Co. / Technical Project Manager</h4>
                    </div>
                </div>
        </div>
    )
}

export default ToggleText1