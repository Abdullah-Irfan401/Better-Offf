import Styles from "./FourthSection.module.css"


function FourthSection() {
    return (
        <div className={Styles.main} >
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

            <div className={Styles.services} >
                <h1>Services</h1>
            </div>
        </div>
    )
}

export default FourthSection
