import { Button } from "antd/es/radio"
import ButtonComponent from "../../components/button"
import Date from "../../components/data"
import HomeIcon from "../../components/home"
import InputComponent from "../../components/input"
import { Contener, Div } from "./styled"
import { DatePicker, Input } from "antd"

function Cadastro() {
  return (
    <>
      <HomeIcon />
      <h1>Cadastro</h1>
      <Contener>
        <Div>
          <h4>Nome</h4>
          <Input type='text' id='nome' name='nome' placeholder='Ex: Felipe Alvez' />
          <h4>Senha</h4>
          <Input type='password' id='senha' name='senha' placeholder={'##########'} />
          <h4>Data de Nascimento</h4>
          <DatePicker />
        </Div>
        <Div>
          <h4>E-Mail</h4>
          <Input type='email' id='email' name='email' placeholder='felipeAlves123@gmail.com' />
          <h4>Confirmar Senha</h4>
          <Input type='password' id='confirmarSenha' name='confirmarSenha' placeholder='##########' />
          <h4>Telefone</h4>
          <Input type='number' id='telefone' name='telefone' placeholder='(65) 9914-5842' />
        </Div>
      </Contener >
      <button style={{ background: '#f84', margin: '10px' }} >
        Cadastrar
      </button>
    </>
  )
}
export default Cadastro