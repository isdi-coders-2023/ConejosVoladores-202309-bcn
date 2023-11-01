import { Route, Routes } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <MainHeader />
      <main className="main-content>">
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
