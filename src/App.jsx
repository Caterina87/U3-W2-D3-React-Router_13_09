import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./Components/TvShows";
import MoviesDetails from "./Components/MoviesDetails";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<MyHeader />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="MoviesDetails" element={<MoviesDetails />} />
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
