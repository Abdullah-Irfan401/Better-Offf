import Styles from "./NavBar.module.css"

function NavBar() {
    return (
        <div>
            <nav className={Styles.MainNav} >
                <div className={Styles.Logo}>
                    <h2><strong>Better Off</strong></h2>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
