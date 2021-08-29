import "./ArticuloMenu.css"
import imgPalmito from "../media/pizzas/Palmito.jpg"
const ArticuloMenu = () => {
    return (
        <div className="menu-container">
            <h2>MENÚ</h2>
            <div className="menu-flex-container">
                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="Pizza de palmito" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Pizza de Palmitos</span>
                        <p>Salsa de tomate natural, queso mozarella, palmito en trocitos, salsa golf y orégano</p>
                        <div className="item-prices-container">
                            <div className="price-container">
                                <span className="span-type">Personal</span>
                                <span className="span-price">18.000 Gs</span>
                            </div>
                            <div className="price-container">
                                <span className="span-type">Familiar</span>
                                <span className="span-price">50.000 Gs</span>
                            </div>
                            <div className="price-container">
                                <span className="span-type">Tuicha</span>
                                <span className="span-price">60.000 Gs</span>
                            </div>

                        </div>
                    </div>
                </div>   
                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="Pizza de palmito" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Pizza de Palmitos</span>
                        <p>Salsa de tomate natural, queso mozarella, palmito en trocitos, salsa golf y orégano</p>
                        <div className="item-prices-container">
                            <div className="price-container">
                                <span className="span-type">Personal</span>
                                <span className="span-price">18.000 Gs</span>
                            </div>
                            <div className="price-container">
                                <span className="span-type">Familiar</span>
                                <span className="span-price">50.000 Gs</span>
                            </div>
                            <div className="price-container">
                                <span className="span-type">Tuicha</span>
                                <span className="span-price">60.000 Gs</span>
                            </div>

                        </div>
                    </div>
                </div>   

                <div className="menu-item-container">        
                    <div className="item-img-container">
                        <img src={imgPalmito} alt="Pizza de palmito" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">Pizza de Palmitos</span>
                        <p>Salsa de tomate natural, queso mozarella, palmito en trocitos, salsa golf y orégano</p>
                        <div className="item-prices-container">
                            <div className="price-container">
                                <span className="span-type">Personal</span>
                                <span className="span-price">18.000 Gs</span>
                            </div>
                            <div className="price-container">
                                <span className="span-type">Familiar</span>
                                <span className="span-price">50.000 Gs</span>
                            </div>
                            <div className="price-container">
                                <span className="span-type">Tuicha</span>
                                <span className="span-price">60.000 Gs</span>
                            </div>

                        </div>
                    </div>
                </div>   
            </div>
                
        </div>
    )
}

export default ArticuloMenu
