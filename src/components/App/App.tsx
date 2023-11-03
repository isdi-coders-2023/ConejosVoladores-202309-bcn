import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";
import NavigationBar from "../NavigationBar/NavigationBar";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <NavigationBar />
    </AppStyled>
  );
};

export default App;
