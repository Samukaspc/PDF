import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Temporario from './components/pages/dashboard/temporario';
import EsqueciSenha from './components/pages/dashboard/esqueciSenha';
import Cadastro from './components/pages/dashboard/cadastro';
import Login from './components/pages/dashboard/login';
import TelaInicial from './components/pages';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Temporario" element={<Temporario />} />
          <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
          <Route path="Cadastro" element={<Cadastro />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
