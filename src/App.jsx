import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinUs from "./Pages/JoinUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<MainPage /> }/>
         <Route path="/joinus" element={<JoinUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
