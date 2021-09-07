import "./ArticuloMenu.css"
import imgPalmito from "../media/pizzas/Palmito.jpg"
import imgHelado from "../media/helados/helado.jpg"
import imgEmpanada from "../media/rotiseria/empanada.jpg"
import TemplateMenu from "./TemplateMenu"
import {useState} from "react"


const ArticuloMenu = () => {
    let pizzasTemplate=[
        {
            title:"Clásica",
            paragraph:"Salsa de tomate natural, mozzarella y salpicado de orégano",
            img:imgPalmito
        },
        {
            title:"Romana",
            paragraph:"Salsa de carne, mozzarella, orégano",
            img:imgPalmito
        },
        {
            title:"Mozzarella",
            paragraph:"Salsa de tomate natural, queso mozzarella, rodajas de tomate y orégano",
            img:imgPalmito
        }
    ]
    let heladosTemplate=[
        {
            title:"Sabor chocolate",
            paragraph:"Hecho con escencias de chocolate",
            img:imgHelado
        },
        {
            title:"Milk Shake",
            paragraph:"Un postre hecho con sabores de helado a preferencia y leche",
            img:imgHelado
        },
        {
            title:"Ice Cream Cola",
            paragraph:"Una mezcla entre deliciosos sabores de helado y Coca Cola",
            img:imgHelado
        }
    ]
    let empanadasTemplate=[
        {
            title:"Empanada de carne",
            paragraph:"Salsa de tomate natural, mozzarella y salpicado de orégano",
            img:imgEmpanada
        },
        {
            title:"Empanada de choclo",
            paragraph:"Salsa de carne, mozzarella, orégano",
            img:imgEmpanada
        },
        {
            title:"Empanada de jamón y queso",
            paragraph:"Salsa de tomate natural, queso mozzarella, rodajas de tomate y orégano",
            img:imgEmpanada
        }
    ]
    const [valorContenido, setValorContenido] = useState("pizza")    
    const handleButtonChange=(e)=>{
        setValorContenido(e.target.name);
    }
    return (
        <>
        <div id="nuestrosProductos" className="menu-container">
            <h2>Algunos de nuestros productos</h2>
            <div className="menu-button_change-container">
                <button name="pizza" onClick={(e)=>handleButtonChange(e)} className={"button_change-item " + (valorContenido==="pizza"?"button_change-item-active":"")}>Pizzas</button>
                <button name="helado" onClick={(e)=>handleButtonChange(e)} className={"button_change-item " + (valorContenido==="helado"?"button_change-item-active":"")}>Helados</button>
                <button name="empanada" onClick={(e)=>handleButtonChange(e)} className={"button_change-item " + (valorContenido==="empanada"?"button_change-item-active":"")}>Rotisería</button>

            </div>
            <div className="menu-flex-container">
                {valorContenido==="pizza"?pizzasTemplate.map(el=>(
                        <TemplateMenu valor={el}/>
                )):<></>}
                {valorContenido==="empanada"?empanadasTemplate.map(el=>(
                        <TemplateMenu valor={el}/>
                )):<></>}
                {valorContenido==="helado"?heladosTemplate.map(el=>(
                        <TemplateMenu valor={el}/>
                )):<></>}



             
        </div>
        <div className="menu-button-container">
            <button><a href="">Ver el menú completo</a></button>
        </div>
        </div>
   
        </>
    )
}

export default ArticuloMenu
