import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Type from './type/Type';

function App() {

  return (
    <BrowserRouter>
      <>
        <div id='header'>
          <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Marcador de motoristas
              </a>
            </div>
          </nav>        
        </div>
        <div id='body'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/type' element={<Type />}/>
          </Routes>
        </div>
        <div id='footer'>
          <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between">
              <span className="navbar-brand mb-0 h1">Empresa Legal</span>
              <span className="text-light">Telefone: (81) 99999-9999</span>
              <span className="text-light">E-mail: contato@empresa.com</span>
            </div>
          </nav>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
