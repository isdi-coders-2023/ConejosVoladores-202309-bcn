import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";
import NavigationBar from "../NavigationBar/NavigationBar";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import UiContext from "../../features/Ui/store/UiContext";

const App = (): React.ReactElement => {
  const { isLoading } = useContext(UiContext);

  return (
    <AppStyled>
      <Header />
      {isLoading && <Loading />}
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
