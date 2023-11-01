import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import MainStyled from "./AppStyles";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Header />
      <MainStyled className="main-content>">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </MainStyled>
    </div>
  );
};

export default App;
