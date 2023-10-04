import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Router from "./Router/Router";
import SearchMovies from "./Components/Search/Search";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <SearchMovies/> */}
        <div className="container">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;