const TemplateMenu = ({valor}) => {

    return (
        <div className="menu-item-container ">        
                    <div className="item-img-container ">
                        <img src={valor.img} alt="Foto 1" />
                    </div>
                    <div className="item-info-container">
                        <span className="item-info_title">{valor.title}</span>
                        <p>{valor.paragraph}</p>
                    </div>
        </div>  
    )
}

export default TemplateMenu
