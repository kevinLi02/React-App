import ButtonComp2 from "./ButtonComp2";
import { useState, useRef, useEffect } from "react";
import { StyledDropDown } from "./styles/DropDown.styled";
const DropDown = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuName, setMenuName] = useState("Data: Aggregate ►");
  const ref = useRef();
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (showMenu && ref.current && !ref.current.contains(e.target)) {
        setShowMenu(false);
        setMenuName(menuName.substring(0, menuName.length - 1) + "►");
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [menuName, showMenu]);
  const clickLog = () => {
    setMenuName("Data: LeagueOfGraphs ►");
    props.onClickLog();
    setShowMenu(!showMenu);
  };
  const clickUgg = () => {
    setMenuName("Data: u.gg ►");
    props.onClickUgg();
    setShowMenu(!showMenu);
  };
  const clickOpgg = () => {
    setMenuName("Data: op.gg ►");
    props.onClickOpgg();
    setShowMenu(!showMenu);
  };
  const clickAggregate = () => {
    setMenuName("Data: Aggregate ►");
    props.onClickAggregate();
    setShowMenu(!showMenu);
  };
  return (
    <StyledDropDown ref={ref}>
      <ButtonComp2
        text={menuName}
        onClick={() => {
          setShowMenu(!showMenu);
          if (
            menuName.substring(menuName.length - 1, menuName.length) === "▼"
          ) {
            setMenuName(menuName.substring(0, menuName.length - 1) + "►");
          } else {
            setMenuName(menuName.substring(0, menuName.length - 1) + "▼");
          }
        }}
      />

      {showMenu ? (
        <div>
          <ButtonComp2 text="Aggregate" onClick={clickAggregate} />
          <ButtonComp2 text="LeagueofGraphs" onClick={clickLog} />
          <ButtonComp2 text="u.gg" onClick={clickUgg} />
          <ButtonComp2 text="op.gg" onClick={clickOpgg} />
        </div>
      ) : null}
    </StyledDropDown>
  );
};

export default DropDown;
