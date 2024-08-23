
import  { useState, useEffect } from 'react';
import Styles from "./NavBar.module.css"
// import { useEffect } from "react";

function NavBar() {

    const [scrolled , setScrolled] = useState(false);
    const [showSidebar , setShowSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };





    // function showSidebar(){
    //     const sidebar = document.querySelector('.sidebar')
    //     sidebar.style.display = 'flex'
    //   }
    //   function hideSidebar(){
    //     const sidebar = document.querySelector('.sidebar')
    //     sidebar.style.display = 'none'
    //   }


    return (
        <div>
            <nav>
                <ul className={`${Styles.sidebar} ${showSidebar ? Styles.show : ''}`}>
                  <li  onClick={toggleSidebar} ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
                  <hr className={Styles.sidebarhr}></hr>
                  <li><a href="#">Overview</a></li>
                  <hr className={Styles.sidebarhr}></hr>
                  <li><a href="#">Work</a></li>
                  <hr className={Styles.sidebarhr}></hr>
                  <li><a href="#">Feed</a></li>
                  <hr className={Styles.sidebarhr}></hr>
                </ul>
                
                <ul className={`${Styles.navbar} ${scrolled ? Styles.scrolled : ''}`} >
                  <li><a href="#"><strong>Better Offf</strong></a></li>
                  <div className={Styles.menulink} >
                  <li className={Styles.hideOnMobile}><a href="#">Overview</a></li>
                  <li className={Styles.hideOnMobile}><a href="#">Work</a></li>
                  <li className={Styles.hideOnMobile}><a href="#">Feed</a></li>
                  </div>
                  <li className={Styles.menubutton}  onClick={toggleSidebar}  ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
                  <li className={Styles.hideOnMobile}><a href="#">Pricing</a></li>
                </ul>
            
            </nav>

            <h1>BETTER OFF</h1>
            <h2>BETTER OFF</h2>

        </div>
    )
}

export default NavBar

