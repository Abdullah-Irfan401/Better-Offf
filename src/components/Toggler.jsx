import Styles from "./Toggler.module.css"


function Toggler() {
    return (
        <div>
            <div className={Styles.toggler} >

                <div className={Styles.counter} >
                    <h4>1 — 5</h4>
                </div>

                <div className={Styles.toggler_text} >
                    <h1>“We involve this team in every new product. <br />
                        They excel at their work and care about <br />
                        every detail, making each project special <br />
                        and unique.”
                    </h1>
                    <div className={Styles.name} >
                        <img src="./public/Jesse Orrico.avif" alt="" />
                        <h4>Jesse Orrico</h4>
                        <h4>Relevant Compliance / Product Owner</h4>
                    </div>
                </div>
                <div className={Styles.boxContainer}>
                    <a href="#" className={Styles.box}>
                        <img src="./public/toggle1.avif" alt="icon1"/>
                    </a>
                    <a href="#" className={Styles.box}>
                        <img src="./public/toggle2.avif" alt="icon2"/>
                    </a>
                    <a href="#" className={Styles.box}>
                        <img src="./public/toggle3.avif" alt="icon3"/>
                    </a>
                    <a href="#" className={Styles.box}>
                        <img src="./public/toggle4.avif" alt="icon4"/>
                    </a>
                    <a href="#" className={Styles.box}>
                        <img src="./public/toggle5.avif" alt="icon5"/>
                    </a>
                    </div>
  
            </div>
            
        </div>
    )
}

export default Toggler





