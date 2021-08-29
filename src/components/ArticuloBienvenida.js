import "./ArticuloBienvenida.css"
import logo from "../media/logopng.png"
const ArticuloBienvenida = () => {
    return (
        <>
        <header className="contenedor-header">
            <div className="img-container">
                <img src={logo} alt="Ysapy logo png" />
            </div>
            <ul className="link-container">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nuestros productos</a></li>
                <li><a href="#">Menú</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </header>
        <div className="contenedor-bienvenida">

            <h2>
                <p className="p-bienvenido">Bienvenido a</p>
                <p className="p-titulo">Ysapy</p>
                <p className="p-numero-1">Delivery al 0983 383 806</p>
            </h2>
        </div>
        <div className="scroll"></div>
        </>
    )
}

export default ArticuloBienvenida
