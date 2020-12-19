import React, { useState } from 'react';

import './global.css';
import './App.css';

function App() {

  return (
    <div id="app">
      <aside>

      </aside>
      <main>

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