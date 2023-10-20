import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    return (
        <div className="formulario">
            <form>
                <h2>Preencha os dados para criar o Card do Colaborador</h2>
                <CampoTexto label="Nome" id="Nome" name="Nome" placeholder="Informe o seu nome" />
                <CampoTexto label="Idade" id="Idade" name="Idade" placeholder="Informe a sua idade" />
                <CampoTexto label="Formacao" id="Formacao" name="Formacao" placeholder="Informe a sua formação" />
                <CampoTexto label="Cargo" id="Cargo" name="Cargo" placeholder="Informe o seu cargo" />
                <CampoTexto label="Imagem" id="Imagem" name="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </div>
    );
}

export default Formulario;