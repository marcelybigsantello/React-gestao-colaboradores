import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import Time from './componentes/Time/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#df25c0'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Educação e Psicologia',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Medicina',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Engenharia',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Nutrição',
      cor: '#FFEEDF'
    },
    {
      id: uuidv4(),
      nome: 'Administração',
      cor: '#D27AE4F1'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D27AE4F1'
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Marcely Santello',
      imagem: 'https://github.com/marcelybigsantello.png',
      cargo: 'Analista de Sistemas Pleno',
      formacao: 'Bacharelado em Sistemas de Informação',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'João Cesar',
      imagem: '',
      cargo: 'Analista de Sistemas Java Sênior',
      formacao: 'Bacharelado em Ciências da Computação',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Jose Almeida',
      imagem: '',
      cargo: 'Analista de Sistemas JavaScript Sênior',
      formacao: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Maria Oliveira',
      imagem: '',
      cargo: 'Analista de UX Pleno',
      formacao: 'Especialista em UX Design',
      time: times[8].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  function alterarCor(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function excluirColaborador() {
    console.log("Excluindo o colaborador");
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(item => item.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className='times'>
        {times.map((time, indice) => <Time
          alterarCor={alterarCor}
          key={indice}
          time={time}
          listaColaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoExcluir={excluirColaborador}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
