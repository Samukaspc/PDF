import { Input } from "antd"
import ButtonComponent from "../../components/button"
import HomeIcon from "../../components/home"
import { Column, Container } from "./styled"

function EsqueciSenha() {
  return (
    <>
      <img src="https://media.discordapp.net/attachments/794329020967419914/1106392402140336208/text.gif" alt="" />
      <Container >
        <HomeIcon />
        <h2>Esqueci minha senha</h2>
        <p>Por favor, informe o seu e-mail cadastrado para enviarmos um link de redefinição de senha.</p>
        <p>E-mail ou Usuário </p>
        <Input type="text" placeholder="E-mail" style={{ width: '250px' }} />
        <Column />
        <ButtonComponent type='primary' style={{ width: '100px' }} />
        <Column />
        <a href="/Login">Cancelar</a>
      </Container>


    </>
  )
}
export default EsqueciSenha