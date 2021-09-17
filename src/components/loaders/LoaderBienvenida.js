import "./Loader.css"
import svg from "../../media/svg/verdaderoSvg.svg"
const LoaderBienvenida = ({loader}) => {


    return (
        <div className={"loader-container " +(loader?"":"loader2")}>
            <img src={svg} alt="" />
        </div>
    )
}

export default LoaderBienvenida
