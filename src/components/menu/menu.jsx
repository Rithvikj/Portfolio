import "./menu.scss"

export default function menu({MenuOpen, setMenuOpen}) {
    
  return (
    <div className={"menu " + (MenuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(!MenuOpen)}>
                <a href="#intro" >Intro</a>
            </li>
            <li onClick={()=>setMenuOpen(!MenuOpen)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(!MenuOpen)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(!MenuOpen)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(!MenuOpen)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
