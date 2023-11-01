import { Route, Routes } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <MainHeader />
      <AppStyled>
        <main className="main-content>">
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
      </AppStyled>
    </div>
  );
};

export default App;
