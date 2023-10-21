import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css';

const Formulario = () => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log("Formulário submetido com sucesso");
    }

    return (
        <div className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card do Colaborador</h2>
                <CampoTexto label="Nome" obrigatorio={true} id="Nome" name="Nome" placeholder="Informe o seu nome" />
                <CampoTexto label="Idade" obrigatorio={true} id="Idade" name="Idade" placeholder="Informe a sua idade" />
                <CampoTexto label="Formacao" obrigatorio={true} id="Formacao" name="Formacao" placeholder="Informe a sua formação" />
                <CampoTexto label="Cargo" obrigatorio={true}  id="Cargo" name="Cargo" placeholder="Informe o seu cargo" />
                <CampoTexto label="Imagem" id="Imagem" name="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" obrigatorio={true} itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </div>
    );
}

export default Formulario;