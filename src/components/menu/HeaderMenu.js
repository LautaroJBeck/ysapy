
import logo from "../../media/logopng.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const HeaderMenu = ({handleSection}) => {
    const [active, setActive] = useState()
    const handleButton=()=>{
        if(active){
            setActive(false)
        }else{
            setActive(true)
        }
    }

    return (
        <>

        <header className="contenedor-header">
        <div className="img-container">
            <img src={logo} alt="Ysapy logo png" />
        </div>
        <ul className="link-container">
            <li><Link className="links-header" to="../#inicio">Inicio</Link></li>
            <li><Link name="pizza" onClick={(e)=>handleSection(e)} className="links-header" to="/menu">Pizzas</Link></li>
            <li><Link name="helados" onClick={(e)=>handleSection(e)} className="links-header" to="/menu">Helados</Link></li>
            <li><Link name="rotiseria" onClick={(e)=>handleSection(e)} className="links-header" to="/menu">Rotisería</Link></li>
            <li><Link className="links-header" to="/menu">Menú</Link></li>
        </ul>
        <div className="contenedor-oculto">
            <button 
            onClick={()=>handleButton()}
            className={"hamburger hamburger--squeeze " + (active?"is-active":"")} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <span className={"links_ocultos-container " + (active?"menu-visible":"")}>
                <Link className="primer_link-oculto" to="../#inicio">Inicio</Link>
                <Link name="pizza" onClick={(e)=>handleSection(e)} to="/menu">Pizzas</Link>
                <Link name="helados" onClick={(e)=>handleSection(e)} to="/menu">Helados</Link>
                <Link name="rotiseria" onClick={(e)=>handleSection(e)} to="/menu">Rotisería</Link>
                <Link className="ultimo_link-oculto" to="/menu">Menú</Link>
            </span>
        </div>
    </header>

        </>
    )
}

export default HeaderMenu
