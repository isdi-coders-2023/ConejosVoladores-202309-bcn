import { Route, Routes } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";

const App = (): React.ReactElement => {
  return (
    <>
      <MainHeader />
      <main className="main-content>">
        <Routes>
          <Route path="/home" />
        </Routes>
      </main>
    </>
  );
};

export default App;
import { Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <main className="main-content>">
        <Routes>
          <Route path="/home" />
        </Routes>
      </main>
    </>
  );
};

export default App;
