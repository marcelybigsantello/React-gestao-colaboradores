import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Informe o seu nome" />
      <CampoTexto label="Idade" placeholder="Informe a sua idade"/>
      <CampoTexto label="Formacao" placeholder="Informe a sua formação"/>
      <CampoTexto label="Cargo" placeholder="Informe o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;
