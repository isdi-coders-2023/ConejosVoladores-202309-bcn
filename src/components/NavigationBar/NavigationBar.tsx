import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import React from "react";

const NavigationBar = (): React.ReactElement => {
  return (
    <NavigationBarStyled>
      <ul className="navigation">
        <li>
          <NavLink aria-label="home" to="/home">
            <img
              className={"navigation__icon navigation__icon--circle"}
              src="images/button-home.svg"
              alt="Home button"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <NavLink aria-label="add" to="/">
            <img
              className={"navigation__icon navigation__icon--circle"}
              src="images/button-plus.svg"
              alt="Add character button"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
