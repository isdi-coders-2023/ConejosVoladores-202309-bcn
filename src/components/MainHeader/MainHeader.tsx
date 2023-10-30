import MainHeaderStyled from "./MainHeaderStyled";

const MainHeader = (): React.ReactElement => {
  return (
    <MainHeaderStyled>
      <header className="header">
        <img
          src="/favicon.webp"
          alt="Super Smash Bross logo"
          className="header__logo"
        />
        <span className="header__title">Mario Smashers</span>
      </header>
    </MainHeaderStyled>
  );
};

export default MainHeader;
