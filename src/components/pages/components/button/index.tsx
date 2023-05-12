import { Button } from 'antd';

function ButtonComponent({ style, type }: any) {
  return (
    <>
      <Button
        type={type}
        style={style}
      >
        Enviar
      </Button>
    </>
  );
}


export default ButtonComponent;