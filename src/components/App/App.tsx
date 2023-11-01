import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="main-content>">
        <Routes>
          <Route path="/home" />
        </Routes>
      </main>
    </>
  );
};

export default App;
