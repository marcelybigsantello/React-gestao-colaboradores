import { useState } from 'react';
import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {
    const labelCriarCard = "Criar Card";
    const labelCriarTime = "Criar Time";
    const[nome, setNome] = useState('');
    const[idade, setIdade] = useState('');
    const[formacao, setFormacao] = useState('');
    const[cargo, setCargo] = useState('');
    const[imagem, setImagem] = useState('');
    const[time, setTime] = useState('');
    const[nomeTime, setNomeTime] = useState('');
    const[corTime, setCorTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoCadastrar({
            nome,
            idade, 
            formacao,
            cargo,
            imagem,
            time
        })
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
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    label="Idade"
                    obrigatorio={true} 
                    id="Idade"
                    name="Idade"
                    placeholder="Informe a sua idade" 
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}    
                />
                <CampoTexto 
                    label="Formação"
                    obrigatorio={true} 
                    id="Formacao" 
                    name="Formacao"
                    placeholder="Informe a sua formação"
                    valor={formacao}
                    aoAlterado={valor => setFormacao(valor)}
                 />
                <CampoTexto
                    label="Cargo"
                    obrigatorio={true}
                    id="Cargo" 
                    name="Cargo" 
                    placeholder="Informe o seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    id="Imagem" 
                    name="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    obrigatorio={true} 
                    itens={props.times}
                    valor={time}
                    aoAlterado={val => setTime(val)}
                />
                <Botao>
                    {labelCriarCard}
                </Botao>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true} 
                    id="Nome" 
                    name="Nome" 
                    placeholder="Informe o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} 
                />
                <CampoTexto 
                    label="Cor"
                    obrigatorio={true} 
                    id="Cor"
                    name="Cor"
                    placeholder="Informe a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}    
                />
                <Botao>
                    {labelCriarTime}
                </Botao>
            </form>
        </div>
    );
}

export default Formulario;