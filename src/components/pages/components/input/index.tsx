import { Inpt, Label } from "./styled";

function InputComponent(props: any) {
  const { label, name, value, onChange, type, placeholder } = props;

  return (
    <>
      <Inpt>
        <Label>
          <label htmlFor={name}>{label}</label>
        </Label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Inpt>
    </>


  );
}
export default InputComponent;