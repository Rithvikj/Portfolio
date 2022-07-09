import "./portfoliolist.scss"

export default function Portfoliolist({title,id,active,setSelected}) {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
