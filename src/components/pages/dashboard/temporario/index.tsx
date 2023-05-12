import { Card } from "antd"
import HomeIcon from "../../components/home"
import Meta from "antd/es/card/Meta"

function Temporario() {
  return (
    <>
      <HomeIcon />
      <h1>Temporario</h1>
      <Card
        style={{ width: 250, height: 250 }}
        cover={
          <img
            style={{ width: 250, height: 150 }}
            alt="Energia"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcTAxPmLG5Lh3klOFVhj7-JNQBbrYJ5vTK81H2bLhNumymbYA38KG-sa45IFq-wqO1cE&usqp=CAU"
          />
        }
      >
        <Meta title="Energisa" description="O Grupo Energisa " />
      </Card>
    </>
  )
}
export default Temporario