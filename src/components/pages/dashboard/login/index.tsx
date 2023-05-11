import HomeIcon from "../../components/home"
import InputComponent from "../../components/input"
import { Button } from "./styled"

function Login() {
  return (
    <>
      <HomeIcon />
      <Button>
        <img src='https://cdn-icons-png.flaticon.com/512/72/72648.png' alt="PDF" width="150" />
        <InputComponent label='Login' />
        <InputComponent label='Senha' />
        <p>
          <input type="checkbox" />
          Relembreme
        </p>
        <a href="/EsqueciSenha">
          <p>Esqueci minha senha</p>
        </a>
      </Button>
    </>
  )
}
export default Login