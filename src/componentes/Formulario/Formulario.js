import CampoTexto from "../CampoTexto/CampoTexto";
import './Formulario.css'
const Formulario = () => {
    return (
        <div className="">
            <form>
                <h2>Preencha os dados para criar o Card do Colaborador</h2>
                <CampoTexto label="Nome" id="Nome" name="Nome" placeholder="Informe o seu nome" />
                <CampoTexto label="Idade" id="Idade" name="Idade" placeholder="Informe a sua idade" />
                <CampoTexto label="Formacao" id="Formacao" name="Formacao" placeholder="Informe a sua formação" />
                <CampoTexto label="Cargo" id="Cargo" name="Cargo" placeholder="Informe o seu cargo" />
                <CampoTexto label="Imagem" id="Imagem" name="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </div>
    );
}

export default Formulario;