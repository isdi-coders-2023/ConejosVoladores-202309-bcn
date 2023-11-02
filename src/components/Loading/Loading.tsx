const Loading = (): React.ReactElement => {
  return (
    <div>
      <img src="public/images/logo.png" alt="logo loading page"></img>
      <div className="load">
        <div className="smash-logo">
          <div className="smash-logo__line-vertical"></div>
          <div className="logo__line--horizontal"></div>
        </div>
        <div className="logo__ld">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
