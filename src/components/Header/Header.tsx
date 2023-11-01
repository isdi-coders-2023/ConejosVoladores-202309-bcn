import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="header">
        <img
          src="/favicon.webp"
          alt="Super Smash Bross logo"
          className="header__logo"
          width="48"
          height="48"
        />
        <span className="header__title">Mario Smashers</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
