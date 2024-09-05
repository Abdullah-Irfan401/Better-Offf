
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
                  <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131 20" fill="none" width="131" height="20"  >
                      <path d="M117.812 4.34783C117.812 1.85651 119.758 0 122.208 0C124.659 0 126.604 1.84453 126.604 4.34783C126.604 6.85112 124.671 8.69565 122.208 8.69565C119.746 8.69565 117.812 6.85112 117.812 4.34783ZM125.792 4.34783C125.792 2.23979 124.216 0.706671 122.208 0.706671C120.201 0.706671 118.625 2.25177 118.625 4.34783C118.625 6.44389 120.201 7.98898 122.208 7.98898C124.216 7.98898 125.792 6.44389 125.792 4.34783ZM120.374 6.73134V1.94035H122.356C123.538 1.94035 124.129 2.46736 124.129 3.36567C124.129 4.04839 123.711 4.41969 123.083 4.56342V4.59935C124.339 4.79099 123.957 6.58762 124.24 6.68343V6.73134H123.058C122.824 6.51575 123.206 5.03054 122.024 5.03054H121.544V6.73134H120.374ZM122.061 4.10828C122.566 4.10828 123.033 4.02443 123.033 3.44951C123.033 2.91053 122.553 2.83866 122.061 2.83866H121.544V4.10828H122.061Z" fill="#000000"></path>
                      <path d="M0 19.5716V0.428711H8.86586C12.8421 0.428711 15.0093 2.07157 15.0093 5.25014C15.0093 7.60729 13.6122 8.768 12.0182 9.30372V9.35729C14.0242 9.71443 15.7436 11.1073 15.7436 13.9644C15.7436 17.8752 13.1645 19.5894 9.18826 19.5894H0V19.5716ZM8.02405 8.25015C9.77931 8.25015 10.7644 7.69658 10.7644 6.05372C10.7644 4.41086 9.68976 3.85729 8.11361 3.85729H4.1374V8.25015H8.02405ZM8.23898 16.143C10.5853 16.143 11.5167 15.3394 11.5167 13.5359C11.5167 11.7323 10.4062 10.9466 8.40018 10.9466H4.1374V16.143H8.23898Z" fill="#000000"></path>
                      <path d="M30.8803 13.7141H20.7606C20.7785 15.7499 22.1218 17.1963 24.1458 17.1963C26.0085 17.1963 26.7608 16.1784 27.0115 15.4106H30.737C29.9847 18.1427 27.8175 20.0177 24.0204 20.0177C19.6143 20.0177 17.0352 16.982 17.0352 12.732C17.0352 8.482 19.5606 5.44629 24.0204 5.44629C28.4802 5.44629 30.8803 8.21414 30.8803 12.9463V13.732V13.7141ZM27.1548 11.2677C27.1548 9.37486 25.9548 8.19629 24.0204 8.19629C22.1935 8.19629 20.9397 9.33914 20.7785 11.2677H27.1727H27.1548Z" fill="#000000"></path>
                      <path d="M39.6352 16.8746V19.5532C38.8113 19.7317 38.1486 19.821 37.3963 19.821C34.6559 19.821 33.3484 18.6425 33.3484 15.3567V8.71387H31.4141V5.9103H33.3484V1.83887H37.0202V5.89244H39.4919V8.69602H37.0202V15.321C37.0202 16.7675 37.5396 16.9817 38.4709 16.9817C38.9008 16.9817 39.1157 16.9639 39.6172 16.8746H39.6352Z" fill="#000000"></path>
                      <path d="M48.6625 16.8746V19.5532C47.8386 19.7317 47.1759 19.821 46.4236 19.821C43.6833 19.821 42.3758 18.6425 42.3758 15.3567V8.71387H40.4414V5.9103H42.3758V1.83887H46.0475V5.89244H48.5192V8.69602H46.0475V15.321C46.0475 16.7675 46.5669 16.9817 47.4983 16.9817C47.9282 16.9817 48.1431 16.9639 48.6446 16.8746H48.6625Z" fill="#000000"></path>
                      <path d="M63.1186 13.7141H52.9989C53.0168 15.7499 54.3601 17.1963 56.3841 17.1963C58.2468 17.1963 58.9991 16.1784 59.2498 15.4106H62.9753C62.223 18.1427 60.0558 20.0177 56.2587 20.0177C51.8526 20.0177 49.2734 16.982 49.2734 12.732C49.2734 8.482 51.7989 5.44629 56.2587 5.44629C60.7185 5.44629 63.1186 8.21414 63.1186 12.9463V13.732V13.7141ZM59.3931 11.2677C59.3931 9.37486 58.1931 8.19629 56.2587 8.19629C54.4318 8.19629 53.178 9.33914 53.0168 11.2677H59.411H59.3931Z" fill="#000000"></path>
                      <path d="M73.2915 5.7853V9.07102C72.9333 9.01745 72.7004 8.99959 72.3959 8.99959C70.2824 8.99959 68.5272 10.446 68.5272 12.946V19.5889H64.8555V5.89244H68.5272V8.24959H68.5809C69.2794 6.73173 70.4437 5.71387 72.0735 5.71387C72.4676 5.71387 72.8258 5.71387 73.2736 5.7853H73.2915Z" fill="#000000"></path>
                      <path d="M79.1484 9.98187C79.1484 4.23187 82.659 0.0175781 88.6233 0.0175781C94.5876 0.0175781 98.0981 4.21401 98.0981 9.98187C98.0981 15.7497 94.5518 19.964 88.6233 19.964C82.6948 19.964 79.1484 15.7676 79.1484 9.98187ZM93.8711 9.98187C93.8711 6.41044 92.5099 3.42829 88.6412 3.42829C84.7724 3.42829 83.4291 6.4283 83.4291 9.98187C83.4291 13.5354 84.7366 16.5712 88.6412 16.5712C92.5457 16.5712 93.8711 13.5354 93.8711 9.98187Z" fill="#000000"></path>
                      <path d="M101.252 19.571V8.69603H99.3711V5.89245H101.252V4.6603C101.252 1.39244 102.541 0.213867 105.228 0.213867C105.926 0.213867 106.535 0.267439 107.377 0.428153V3.14244C106.858 3.08887 106.661 3.07102 106.303 3.07102C105.407 3.07102 104.941 3.24959 104.941 4.73173V5.91031H109.025V4.67816C109.025 1.4103 110.315 0.231724 113.001 0.231724C113.7 0.231724 114.291 0.285296 115.151 0.44601V3.1603C114.631 3.10673 114.416 3.08887 114.04 3.08887C113.18 3.08887 112.697 3.26744 112.697 4.74959V5.92816H115.151V8.73174H112.697V19.6068H109.025V8.73174H104.941V19.6068H101.252V19.571Z" fill="#000000"></path>
                  </svg></a></li>
                  <div className={Styles.menulink} >
                    <ul>
                      <li className={Styles.hideOnMobile}><a href="#">Overview</a></li>
                      <li className={Styles.hideOnMobile}><a href="#">Work</a></li>
                      <li className={Styles.hideOnMobile}><a href="#">Feed</a></li>
                    </ul>
                  </div>
                  <li className={Styles.menubutton}  onClick={toggleSidebar}  >Menu</li>
                  <li className={Styles.hideOnMobile}><a href="#">Pricing</a></li>
                </ul>
            
            </nav>

            

        </div>
    )
}

export default NavBar

