import { Button } from './styled';
import { Link } from 'react-router-dom'
function TelaInicial() {
  return (
    <>
      <div>
        <img src='https://cdn-icons-png.flaticon.com/512/6348/6348573.png' alt="PDF" width="200" />
      </div>
      <h1>Projeto PDF</h1>
      <Button>
        <Link to="/Login"><button> Login</button></Link>
        <Link to="/Cadastro"><button>Cadastro</button></Link>
      </Button>
      <Button>
        <Link to="/Temporario"><button>Temporário</button></Link>
      </Button>



    </>
  )
}
export default TelaInicial