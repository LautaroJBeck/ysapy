import { useState } from "react";
import "./MenuYsapy.css"
import Header from "../Header";
import LoaderBienvenida from "../loaders/LoaderBienvenida";
const MenuYsapy = () => {
    let [loader,setLoader]=useState(true)
    const funcionEvento=()=>{
        setLoader(false);

    }
    return (
        <>
        <Header/>
        <LoaderBienvenida loader={loader}/>
        <div onLoad={()=>funcionEvento()} className="section-menu-container">
            <h4>Pizzas</h4>
            <article className="section-pizza-container">
                <div className="un-pedazo">
                    <h5>
                        PIZZA CLÁSICA
                    </h5>
                    <p>Salsa de tomate natural, mozzarella y salpicado de orégano</p>    
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

                <div className="un-pedazo">
                    <h5>
                        PIZZA CLÁSICA
                    </h5>
                    <p>Salsa de tomate natural, mozzarella y salpicado de orégano</p>    
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

                <div className="un-pedazo">
                    <h5>
                    PIZZA CLÁSICA
                    </h5>
                    <p>Salsa de tomate natural, mozzarella y salpicado de orégano</p>       
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

                <div className="un-pedazo">
                    <h5>
                    PIZZA CLÁSICA
                    </h5>
                    <p>Salsa de tomate natural, mozzarella y salpicado de orégano</p>    
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
            </article>   
        </div>
        </>
    )
}

export default MenuYsapy
