import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;




/**
 * Componente
 *   Função que retorna algum conteudo html, css ou javascript
 *   Bloco isolado de html, css e javascript o qual não interfere no resto da aplicação
 * 
 * Propriedade
 *   Informações que um componente PAI passa para o componente FILHO
 *   Pode passar variáveis e funções tbm  ="..." ={...}
 * 
 * Estado
 *   Informações mantidas pelo componente (Lembrar: imutabilidade)
 *   useState não atualiza mas cria um novo a cada vez
 * 
 *

import Header from './Header';
import Footer from './Footer';

function App() {

  //let counter = 1;

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);

    alert('Hello World '+counter)
  }

  return (
    <>
      <h1>contador: {counter}</h1>

      <button onClick={incrementCounter}>Incrementar</button>

      <Header title="Dashboard" />

      <Footer />
    </>
  );
}

export default App;
*/