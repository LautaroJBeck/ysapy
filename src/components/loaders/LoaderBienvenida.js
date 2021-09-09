import "./Loader.css"
import svg from "../../media/svg/verdaderoSvg.svg"
import {useState } from "react"
const LoaderBienvenida = () => {
    let [loader,setLoader]=useState(true)


            const funcionEvento=()=>{
                setLoader(false);
            }

        

        
        


    return (
        <div  onLoad={()=>funcionEvento()} className={"loader-container " +(loader?"":"loader2")}>
            <img src={svg} alt="" />
        </div>
    )
}

export default LoaderBienvenida
