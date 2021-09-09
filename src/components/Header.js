import "./ArticuloBienvenida.css"
import logo from "../media/logopng.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
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
            <li><Link className="links-header" to="../#sobreNosotros">Sobre Nosotros</Link></li>
            <li><Link className="links-header" to="../#nuestrosProductos">Nuestros productos</Link></li>
            <li><Link className="links-header" to="../#contacto">Contacto</Link></li>
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
                <Link to="../#sobreNosotros">Sobre Nosotros</Link>
                <Link to="../#nuestrosProductos">Nuestros productos</Link>
                <Link to="../#contacto">Contacto</Link>
                <Link className="ultimo_link-oculto" to="/menu">Menú</Link>
            </span>
        </div>
    </header>

        </>
    )
}

export default Header
