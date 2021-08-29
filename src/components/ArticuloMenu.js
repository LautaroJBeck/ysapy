import "./ArticuloMenu.css"
import imgPalmito from "../media/pizzas/Palmito.jpg"
const ArticuloMenu = () => {
    return (
        <div className="menu-container">
            <h2>MENÚ</h2>
            <div className="menu-flex-container">
                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="Clasica" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Pizza Clásica</span>
                        <p>Salsa de tomate natural, mozarella y salpicado de orégano</p>
                    </div>
                </div>  


                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="romana" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Pizza Romana</span>
                        <p>Salsa de carne, mozzarella y orégano</p>
                    </div>
                </div>   


                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="Mozzarella" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Mozzarella</span>
                        <p>Salsa de tomate natural, queso mozzarella, rodajas de tomate y orégano</p>
                    </div>
                </div>


                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="choclo" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Choclo</span>
                        <p>Salsa de tomate natural, queso mozzarella, rodajas de tomate y orégano</p>
                    </div>
                </div>

                
                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="napolitana" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Napolitana</span>
                        <p>Salsa de tomate natural, queso mozzarella, jamón y orégano</p>
                    </div>
                </div>


                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="vegetariana" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Vegetariana</span>
                        <p>Salsa de tomate natural, queso mozzarella, rodajas de tomate, pimientos en cubitos, aceitunas negras y orégano</p>
                    </div>
                </div>


                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="pollo" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Pollo</span>
                        <p>Salsa de tomate natural, queso mozarella, rodajas de tomate, pimiento en cubitos, aceitunas negras y orégano</p>
                    </div>
                </div>
                
                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="palmito" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Palmito y Salsa Golf</span>
                        <p>Salsa de tomate natural, queso mozzarella, pechuga de pollo en trocitos, salsa y orégano</p>
                    </div>
                </div>

                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="aceituna" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Aceituna</span>
                        <p>Salsa de tomate natural, queso mozzarella, aceitunas verdes y orégano</p>
                    </div>
                </div>

                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="calabresa" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Calabresa</span>
                        <p>Salsa de tomate natural, queso mozzarella, rodajas de calabresa y orégano</p>
                    </div>
                </div>

                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="atun" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Atún</span>
                        <p>Salsa de tomate natural, queso mozzarella, atún desmenuzado y orégano</p>
                    </div>
                </div>

                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="atun" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Ysapy</span>
                        <p>Salsa de tomate natural, queso mozzarella, calabresa en rodajas, morrones en tiras, aceitunas negras y orégano</p>
                    </div>
                </div>

            </div>
                
        </div>
    )
}

export default ArticuloMenu
