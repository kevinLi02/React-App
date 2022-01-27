import { StyledButton2 } from "./styles/Button2.styled";
const ButtonComp2 = (props) => {
  return (
    <StyledButton2 onClick={props.onClick} bg={props.color} color={props.bg}>
      {props.text}
    </StyledButton2>
  );
};

export default ButtonComp2;
