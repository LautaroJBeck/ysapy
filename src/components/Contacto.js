import "./Contacto.css"
import fotoPizza from "../media/Vegetariana.JPG"
const Contacto = () => {
    return (
        <div id="/#contacto" className="contacto-container">
            <div className="info_contacto-container">
                <div className="contacto_ubicacion-container">
                    <div className="contacto_fotos-container">
                        <img src={fotoPizza} alt="" />
                        <iframe title="ubicacion" className="i-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.434409934923!2d-57.44478528554715!3d-23.408669761855204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94669d42def03931%3A0xf4b5188166acda65!2sHeladeria%20Pizzeria%20Ysapy!5e0!3m2!1ses!2spy!4v1630267701283!5m2!1ses!2spy"  allowFullScreen="" loading="lazy"/>
                    </div>
                <div className="contacto_informacion-container">
                    <h4>Contacto</h4>
                    <p className="contacto_informacion-texto"><i className="fas fa-map-marker-alt"></i> Mariscal Jose Felix Estigarribia, Concepción    </p>
                    <p className="contacto_informacion-texto"><i className="fas fa-clock"></i>De Lunes a Viernes, desde las 9 de la mañana hasta las 12 de la noche</p>
                    <p className="contacto_informacion-texto"> <i className="fas fa-mobile"></i>0331242762 o 0983 383 806 </p>


                </div>
                </div>
                    <div className="contacto_redes-container">
                        <h4>Contactanos o seguinos en:</h4>
                        <div className="contacto-flex">

                        <div className="">
                            <span><i className="fab fa-facebook"></i></span>
                            <a rel="noreferrer" target="_blank" href="/https://www.facebook.com/ysapyhrp">Facebook</a>
                        </div>
                        <div className="">
                            <span><i className="fab fa-instagram"></i></span>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ysapyhrp/">Instagram</a>
                        </div>
                        <div className="">
                            <span><i className="fab fa-whatsapp"></i></span>
                            <a rel="noreferrer" target="_blank" href="https://wa.me/595983383806">Whatsapp</a>
                        </div>
                        </div>
                    </div>
            </div>
     

        </div>
    )
}

export default Contacto
