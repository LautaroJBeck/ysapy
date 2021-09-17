import { useState,useEffect } from "react";
import "./MenuYsapy.css"
import LoaderBienvenida from "../loaders/LoaderBienvenida";
import PizzaMenu from "./sections/pizzas/PizzaMenu";
import HeladoMenu from "./sections/helados/HeladoMenu";
import RotiseriaMenu from "./sections/rotiserias/RotiseriaMenu";
import HeaderMenu from "./HeaderMenu";

const MenuYsapy = () => {

    let [loader,setLoader]=useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1250);
    }, [])

    const [valorContenido, setvalorContenido] = useState("pizza")

    const handleButtonChange=(e)=>{
        setvalorContenido(e.target.name)
    }
    return (
        <>
        <HeaderMenu handleSection={handleButtonChange}/>
        <LoaderBienvenida loader={loader}/>
        <article className="menu-general-container">

        <div className="menu_button-container">
            <button name="pizza" onClick={(e)=>handleButtonChange(e)} className={"menu-button_change button-pizza " + (valorContenido==="pizza"?"button-pizza_active":"")}>Pizzas</button>
            <button name="helados" onClick={(e)=>handleButtonChange(e)} className={"menu-button_change button-helado " + (valorContenido==="helados"?"button-helados_active":"")}>Helados</button>
            <button name="rotiseria" onClick={(e)=>handleButtonChange(e)} className={"menu-button_change button-rotiseria " + (valorContenido==="rotiseria"?"button-rotiseria_active":"")}>Rotiserías</button>
        </div>
        <div className="section-menu-container">
            
                {valorContenido==="pizza"?<PizzaMenu/>:<></>}
                {valorContenido==="helados"?<HeladoMenu/>:<></>}
                {valorContenido==="rotiseria"?<RotiseriaMenu/>:<></>}

        </div>
        </article>
        </>
    )
}

export default MenuYsapy
