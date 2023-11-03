import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import React from "react";
import { useLocation } from "react-router";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationBarStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/home">
            <img
              className={
                pathname === "/home"
                  ? "navigation__icon--active"
                  : "navigation__icon"
              }
              src="images/button-home.webp"
              alt="Home button"
              width={72}
              height={72}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
              className={
                pathname === "/addCharacter"
                  ? "navigation__icon--active"
                  : "navigation__icon"
              }
              src="images/button-plus.webp"
              alt="Add character button"
              width={72}
              height={72}
            />
          </NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
