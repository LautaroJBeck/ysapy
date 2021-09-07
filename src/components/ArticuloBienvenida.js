import "./ArticuloBienvenida.css"
import logo from "../media/logopng.png"
import { useState } from "react"
const ArticuloBienvenida = () => {

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
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobreNosotros">Sobre Nosotros</a></li>
                <li><a href="#nuestrosProductos">Nuestros productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#">Menú</a></li>
            </ul>
            <div className="contenedor-oculto">
                <button 
                onClick={()=>handleButton()}
                class={"hamburger hamburger--squeeze " + (active?"is-active":"")} type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <span className={"links_ocultos-container " + (active?"menu-visible":"")}>
                    <a className="primer_link-oculto" href="#inicio">Inicio</a>
                    <a href="#sobreNosotros">Sobre Nosotros</a>
                    <a href="#nuestrosProductos">Nuestros productos</a>
                    <a href="#contacto">Contacto</a>
                    <a className="ultimo_link-oculto" href="#">Menú</a>
                </span>
            </div>
        </header>
        <div  id="inicio" className="contenedor-bienvenida">

            <h2>
                <p className="p-bienvenido">Bienvenido a</p>
                <p className="p-titulo">Ysapy</p>
                <p className="p-numero-1">Pizzería, Heladería y Rotisería</p>
            </h2>
        </div>
        </>
    )
}

export default ArticuloBienvenida
