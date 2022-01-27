import { StyledHeader } from "./styles/Header.styled";

import test from "./LOL.jpeg";

var sectionStyle = {
  width: "100%",
  backgroundImage: `url(${test})`,
  backgroundSize: "100vw 90vh",
};
const Header = (props) => {
  return (
    <StyledHeader style={sectionStyle}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </StyledHeader>
  );
};

export default Header;
