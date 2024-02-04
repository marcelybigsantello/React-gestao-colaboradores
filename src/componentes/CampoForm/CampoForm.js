import './CampoForm.css'

const CampoForm = ({ type='text', label, placeholder, valor, aoAlterado, obrigatorio = false, id, name }) => {

    const placeholderModificado = `${placeholder}...`;

    const aoDigitado = (evento) => {
       aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo-form campo-form-${type}`}>
            <label>{label} </label>
            <input type={type} onChange={aoDigitado} value={valor} required={obrigatorio} id={id}
                name={name} placeholder={placeholderModificado}></input>
        </div>
    );
}

export default CampoForm;