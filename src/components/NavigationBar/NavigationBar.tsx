import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import React from "react";
import { useLocation } from "react-router";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationBarStyled>
      <ul>
        <li>
          <NavLink to="/home">
            <img
              src={`images/${
                pathname === "/home" ? "button-home--active" : "button-home"
              }.svg`}
              alt="Home button"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" end>
            <img
              src={`images/${
                pathname === "/add" ? "button-add--active" : "button-add"
              }.svg`}
              alt="Add button"
            />
          </NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
