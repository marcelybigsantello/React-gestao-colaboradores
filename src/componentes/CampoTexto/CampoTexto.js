import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome: </label>
            <input type="text" id="nome" name="nome" placeholder="Digite o seu nome"></input>
        </div>
    );
}

export default CampoTexto;