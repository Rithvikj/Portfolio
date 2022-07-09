import './topbar.scss'

import {Person, Mail} from "@mui/icons-material"

export default function topbar({MenuOpen, setMenuOpen}) {

  return (
    <div className={"topbar " + (MenuOpen && "active")} id="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">genius.</a>

                <div className="itemContainer">
                    <Person></Person>
                    <span>+44 55 66 77 88</span>
                    
                </div>
                
                <div className="itemContainer">
                    <Mail></Mail>
                    <span>safak@genius.com</span>
                    
                </div>

            </div>


            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!MenuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            
        </div>
    </div>
  )
}
