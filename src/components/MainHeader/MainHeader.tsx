import MainHeaderStyled from "./MainHeaderStyled";

const MainHeader = (): React.ReactElement => {
  return (
    <MainHeaderStyled>
      <div className="header">
        <img
          src="/favicon.webp"
          alt="Super Smash Bross logo"
          className="header__logo"
        />
        <span className="header__title">Mario Smashers</span>
      </div>
    </MainHeaderStyled>
  );
};

export default MainHeader;
