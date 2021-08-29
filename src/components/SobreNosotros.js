import "./SobreNosotros.css"
import funcionarios from "../media/funcionarios.jpg"
const SobreNosotros = () => {
    return (
        <div className="about_us-container">
            <div className="about_us-img-container">
                <img src={funcionarios} alt="" />
            </div>
            <div className="about_us-info-container">
                <h4>
                    <p className="about_us-acerca">Acerca de</p>
                    <p className="about_us-nosotros">Nosotros</p>
                </h4>
                <p className="about_us-parrafo">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum culpa odio! Placeat odit distinctio, incidunt iure fugit fuga consectetur ut facilis. Iste in totam pariatur reprehenderit ipsa a ut!
                </p>
                <p className="about_us-parrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam est architecto magnam tenetur sapiente dignissimos incidunt similique obcaecati explicabo. Quaerat, saepe molestiae cupiditate cumque distinctio dolore. Officiis cum possimus suscipit!
                </p>
            </div>
        </div>
    )
}

export default SobreNosotros
