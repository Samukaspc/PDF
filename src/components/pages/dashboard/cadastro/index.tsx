import { Button } from "antd/es/radio"
import ButtonComponent from "../../components/button"
import Date from "../../components/data"
import HomeIcon from "../../components/home"
import InputComponent from "../../components/input"
import { Contener, Div } from "./styled"

function Cadastro() {
  return (
    <>
      <HomeIcon />
      <h1>Cadastro</h1>
      <Contener>
        <Div>
          <h4>Nome</h4>
          <InputComponent type='text' id='nome' name='nome' placeholder='Ex: Felipe Alvez' />
          <h4>Senha</h4>
          <InputComponent type='password' id='senha' name='senha' placeholder='' />
          <h4>Data de Nascimento</h4>
          <Date />
        </Div>
        <Div>
          <h4>E-Mail</h4>
          <InputComponent type='email' id='email' name='email' placeholder='felipeAlvez123@gmail.com' />
          <h4>Confirmar Senha</h4>
          <InputComponent type='password' id='confirmarSenha' name='confirmarSenha' placeholder='' />
          <h4>Telefone</h4>
          <InputComponent type='number' id='telefone' name='telefone' placeholder='(65) 9914-5842' masck='(99)9999-99999' />
        </Div>
      </Contener >

      <button style={{ background: '#f84', margin: '10px' }} >
        Cadastrar
      </button>
    </>
  )
}
export default Cadastro