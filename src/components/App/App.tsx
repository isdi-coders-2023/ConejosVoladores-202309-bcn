import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import MainStyled from "./AppStyles";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <MainStyled className="main-content>">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </MainStyled>
    </>
  );
};

export default App;
