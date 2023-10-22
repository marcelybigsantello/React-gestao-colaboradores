import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label} </label>
            <input type="text" onChange={aoDigitado} value={props.valor} required={props.obrigatorio} id={props.id}
                name={props.name} placeholder={placeholderModificado}></input>
        </div>
    );
}

export default CampoTexto;