import { useState } from 'react';
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
    const labelCriarCard = "Criar Card";
    const[nome, setNome] = useState('');
    const[idade, setIdade] = useState('');
    const[formacao, setFormacao] = useState('');
    const[cargo, setCargo] = useState('');
    const[imagem, setImagem] = useState('');
    const[time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log("Formulário submetido com sucesso => ", nome, idade, formacao, cargo, imagem, time);
    }

    return (
        <div className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card do Colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true} 
                    id="Nome" 
                    name="Nome" 
                    placeholder="Informe o seu nome"
                    value={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    label="Idade"
                    obrigatorio={true} 
                    id="Idade"
                    name="Idade"
                    placeholder="Informe a sua idade" 
                    value={idade}
                    aoAlterado={valor => setIdade(valor)}    
                />
                <CampoTexto 
                    label="Formacao"
                    obrigatorio={true} 
                    id="Formacao" 
                    name="Formacao"
                    placeholder="Informe a sua formação"
                    value={formacao}
                    aoAlterado={valor => setFormacao(valor)}
                 />
                <CampoTexto
                    label="Cargo"
                    obrigatorio={true}
                    id="Cargo" 
                    name="Cargo" 
                    placeholder="Informe o seu cargo" 
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    id="Imagem" 
                    name="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    obrigatorio={true} 
                    itens={times}
                    value={time}
                    aoAlterado={val => setTime(val)}
                />
                <Botao>
                    {labelCriarCard}
                </Botao>
            </form>
        </div>
    );
}

export default Formulario;