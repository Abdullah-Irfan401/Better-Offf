import Styles from "./ExploreButton.module.css"


function ExploreButton() {
    return (
        <div>
            <a href="#" className={Styles.customButton}>
                Explore Plans
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="">
                        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
                    </svg>
                </a>
        </div>
    )
}

export default ExploreButton
