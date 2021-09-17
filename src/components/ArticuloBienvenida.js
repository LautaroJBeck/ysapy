import "./ArticuloBienvenida.css"
import { useEffect, useState } from "react"
import LoaderBienvenida from "./loaders/LoaderBienvenida"
const ArticuloBienvenida = () => {
    let [loader,setLoader]=useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1250);
    }, [])
    return (
        <>
        <LoaderBienvenida loader={loader}/>
        <div  id="/#inicio" className="contenedor-bienvenida ">

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
