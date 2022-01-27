import { StyledButton } from "./styles/Button.styled";
const ButtonComp = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      bg={props.bg}
      color={props.color}
      disabled={props.disabled}
    >
      {props.text}
    </StyledButton>
  );
};

export default ButtonComp;
