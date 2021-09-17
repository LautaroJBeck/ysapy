import pizza1Img from "../../../../media/pizzas/Palmito.jpg";
import pizza2Img from "../../../../media/pizzas/Mozzarella.JPG";
import pizza3Img from "../../../../media/pizzas/Vegetariana.JPG";
import pizza4Img from "../../../../media/pizzas/ysapy.JPG"
const PizzaMenu = () => {
    return (
        <>
        <h4>Pizzas</h4>
        <article className="section-pizza-container">
                <div className="un-pedazo">
                    <div className="pedazo_img-container">
                        <img src={pizza1Img} alt="" />
                    </div>
                    <div className="pedazo_info-container ">
                        <h5>
                            PIZZA CLÁSICA
                        </h5>
                        <p>Salsa de tomate natural, mozzarella y salpicado de orégano
                            </p>    
                        <section>
                            <span className="section-pizza_title">Personal</span>
                            <span className="section-pizza_price">12.000 GS</span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Familiar</span>
                            <span className="section-pizza_price">35.000 GS </span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Tuicha</span>
                            <span className="section-pizza_price">40.000 GS</span>
                        </section>
                    </div>
                </div>
                <div className="un-pedazo">
                    <div className="pedazo_img-container">
                        <img src={pizza2Img} alt="" />
                    </div>
                    <div className="pedazo_info-container ">
                        <h5>
                            PIZZA ROMANA
                        </h5>
                        <p>Salsa de carne, mozzarella y orégano
                      
                        </p>    
                        <section>
                            <span className="section-pizza_title">Personal</span>
                            <span className="section-pizza_price">18.000 GS</span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Familiar</span>
                            <span className="section-pizza_price">45.000 GS </span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Tuicha</span>
                            <span className="section-pizza_price">60.000 GS</span>
                        </section>
                    </div>
                </div>
                <div className="un-pedazo">
                    <div className="pedazo_img-container">
                        <img src={pizza3Img} alt="" />
                    </div>
                    <div className="pedazo_info-container ">
                        <h5>
                            PIZZA MOZZARELLA
                        </h5>
                        <p>Salsa de tomate natural, queso mozzarella, rodajas de tomate y orégano
                        </p>    
                        <section>
                            <span className="section-pizza_title">Personal</span>
                            <span className="section-pizza_price">15.000 GS</span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Familiar</span>
                            <span className="section-pizza_price">40.000 GS </span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Tuicha</span>
                            <span className="section-pizza_price">50.000 GS</span>
                        </section>
                    </div>
                </div>

                <div className="un-pedazo">
                    <div className="pedazo_img-container">
                        <img src={pizza4Img} alt="" />
                    </div>
                    <div className="pedazo_info-container ">
                        <h5>
                            PIZZA DE CHOCLO
                        </h5>
                        <p>Salsa de tomate natural, queso mozzarella, granos de choclo y orégano
                        </p>    
                        <section>
                            <span className="section-pizza_title">Personal</span>
                            <span className="section-pizza_price">15.000 GS</span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Familiar</span>
                            <span className="section-pizza_price">40.000 GS </span>
                        </section>
                        <section>
                            <span className="section-pizza_title">Tuicha</span>
                            <span className="section-pizza_price">50.000 GS</span>
                        </section>
                    </div>
                </div>
            </article>  
            <article className="section-pizza-container">
            <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA NAPOLITANA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, jamón y orégano
                       </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 15.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>   
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA VEGETARIANA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, rodajas de tomate, pimiento en cubitos, aceitunas negras y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 15.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 50.000 Gs</span>
                        </div>
                </div>   
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA DE POLLO
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, pechuga de pollo en trocitos, salsa y orégano
                            </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 15.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>   
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA DE PALMITO Y SALSA GOLF
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, palmitos en trocitos, salsa golf y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 50.000 Gs</span>
                            <span>Tuicha / 60.000 Gs</span>
                        </div>
                </div>   
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA DE ACEITUNAS
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, aceitunas verdes y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA CALABRESA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, rodajas de calabresa y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 20.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA DE ATÚN
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, atún desmenuzado y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 45.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA YSAPY
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de toamte natural, queso mozzarella, calabresa en rodajas, morrones en tiras, aceitunas negras y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 20.000 Gs</span>
                            <span>Familiar / 55.000 Gs</span>
                            <span>Tuicha / 65.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA VIENESA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natural, queso mozzarella, salchichas en rodajas, aceitunas verdes, morrones en rodajas, agregado de mayonesa y orégano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 16.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA CARBONARA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate natral, queso mozzarella, preparado de crema de leche, yemas de huevo, mantequilla y panceta, espolvoreado con queso rallado         
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 50.000 Gs</span>
                            <span>Tuicha / 60.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA CAPRICHOSA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, queso mozzarella, jamón, champignón y huevo
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 20.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 60.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA MEXICANA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, queso mozzarella, pepperoni, pimientos y ají picante
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 45.000 Gs</span>
                            <span>Tuicha / 65.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA BOLOGNESA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, queso mozzarella, carne en presentación, molida frita, huevo y cebollas
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 40.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div>  
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA KATUPIRI
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, queso katupiri, espolvoreado con queso parmesano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 45.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div> 
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA KATUPIRI CON POLLO
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, delicioso pollo grille desmenuzado, queso katupiri y aceitunas verdes
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 50.000 Gs</span>
                            <span>Tuicha / 60.000 Gs</span>
                        </div>
                </div> 
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA 4 QUESO
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, queso mozzarella, queso Dambo, queso katupiri, roquefort, espolvoreado con queso parmesano
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 20.000 Gs</span>
                            <span>Familiar / 50.000 Gs</span>
                            <span>Tuicha / 70.000 Gs</span>
                        </div>
                </div> 
                <div className="un-pedazo-info">
                        <div className="pedazo-info-title">
                            <h5>
                            PIZZA AMERICANA
                            </h5>    
                        </div>     
                        <div className="pedazo-info-parrafo">
                            <p>Salsa de tomate, agregado de queso mozzarella, deliciosas pancetas crocantes y morrones en tiras
                        </p>
                        </div>
                        <div className="pedazo-info-spans">
                            <span>Personal / 18.000 Gs</span>
                            <span>Familiar / 45.000 Gs</span>
                            <span>Tuicha / 55.000 Gs</span>
                        </div>
                </div> 
            </article>

               
 
            </>
    )
}

export default PizzaMenu
