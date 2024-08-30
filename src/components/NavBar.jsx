
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
                  <li  onClick={toggleSidebar} className={Styles.sidemenuebutton} >Menu</li>
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
                  <li className={Styles.menubutton}  onClick={toggleSidebar}  >Menu</li>
                  <li className={Styles.hideOnMobile}><a href="#">Pricing</a></li>
                </ul>
            
            </nav>

        

        </div>
    )
}

export default NavBar

