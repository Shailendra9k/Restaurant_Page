import "./App.css";
import PageRouter from "./routers";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
