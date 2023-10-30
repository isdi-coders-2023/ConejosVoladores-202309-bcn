import { Route, Routes } from "react-router-dom";
import MainHeader from "../Header.tsx/MainHeader";

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
