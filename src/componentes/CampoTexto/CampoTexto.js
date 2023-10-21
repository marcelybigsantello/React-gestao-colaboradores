import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;
    
    return (
        <div className="campo-texto">
            <label>{props.label} </label>
            <input type="text" required={props.obrigatorio} id={props.id} name={props.name} placeholder={placeholderModificado}></input>
        </div>
    );
}

export default CampoTexto;