import { VscArrowSmallLeft } from "react-icons/vsc";
import { Seta } from "./styled";

function HomeIcon() {
  return (
    <>
      <Seta>
        <a href="/">
          <VscArrowSmallLeft size='100' color="aqua" />
        </a>
      </Seta>
    </>
  )
}
export default HomeIcon